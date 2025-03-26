import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
