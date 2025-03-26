import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
	//Obtiene el token del header "Authorization".
	const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No hay token" });
  }
  //Lo verifica con jwt.verify().
  //Si es válido, añade la info del usuario a req.user y deja que la petición continúe.
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Continúa con la siguiente función en la ruta protegida
  } catch (error) {
	// Si no es válido, rechaza la petición con un error 401.
    res.status(401).json({ message: "Token no válido", token });
  }
};

export const adminMiddleware = (req, res, next) => {
	if (!req.user.isAdmin) {
	  return res.status(403).json({ message: "Acceso denegado: Se requiere rol de administrador" });
	}
	next();
  };