import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`📌 MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error en la conexión a MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
