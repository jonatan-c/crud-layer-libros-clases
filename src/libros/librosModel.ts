import { Schema, model } from "mongoose";

const LibroSchema = new Schema({
  titulo: String,
  autor: String,
  editorial: String,
  fecha: String,
  precio: Number,
  categoria: String,
});

// module.exports = mongoose.model("Libro", LibroModel);
export default model("Libro", LibroSchema);
