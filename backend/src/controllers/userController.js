import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//Controlador para el registro del perfil
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya está registrado" });
    }

    // Hashear la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear nuevo usuario
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
	  isAdmin: isAdmin || false,
    });

    // Guardar en la base de datos
    const savedUser = await newUser.save();

    res.status(201).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
	  isAdmin: savedUser.isAdmin,
      message: "Usuario registrado con éxito",
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Controlador para Login de usuario y generación de JWT
export const loginUser = async (req, res) => {
	try {
	  const { email, password } = req.body;
  
	  // 1️⃣ Verificar si el usuario existe
	  const user = await User.findOne({ email });
	  if (!user) {
		return res.status(400).json({ message: "Usuario no encontrado" });
	  }
  
	  // 2️⃣ Comparar la contraseña con la almacenada en la BD
	  const isMatch = await bcrypt.compare(password, user.password);
	  if (!isMatch) {
		return res.status(400).json({ message: "Contraseña incorrecta" });
	  }
  
	  // 3️⃣ Generar el token JWT
	  const token = jwt.sign(
		{ 
			id: user._id,
			isAdmin: user.isAdmin, // 👈 Asegurar que se incluye isAdmin en el token
		},
		process.env.JWT_SECRET, // Clave secreta
		{ expiresIn: "1h" } // Tiempo de expiración
	  );
  
	  // 4️⃣ Enviar respuesta con el token
	  res.json({
		message: "Inicio de sesión exitoso",
		token,
		user: { 
			id: user._id, 
			email: user.email, 
			name: user.name,
			isAdmin: user.isAdmin,
		 },
	  });
	} catch (error) {
	  res.status(500).json({ message: "Error en el servidor" });
	}
  };

  //Controlador para obtener el perfil
  export const getUserProfile = async (req, res) => {
	try {
	  const user = await User.findById(req.user.id).select("-password"); // Excluye la contraseña
	  if (!user) {
		return res.status(404).json({ message: "Usuario no encontrado" });
	  }
  
	  res.json(user);
	} catch (error) {
	  res.status(500).json({ message: "Error en el servidor" });
	}
  };
  
