import { Model } from "mongoose";
import { ILibro } from "./librosInterface";
import LibroModel from "./librosModel";

class LibroDAO {
  constructor() {}

  async getLibros(): Promise<ILibro[]> {
    const libros = await LibroModel.find();
    return libros;
  }

  async getLibro(id: string): Promise<ILibro> {
    const libro = await LibroModel.findById(id);
    return libro;
  }

  async createLibro(libro: ILibro): Promise<ILibro> {
    const newLibro = new LibroModel(libro);
    const savedLibro = await newLibro.save();
    return savedLibro;
  }
}

export default LibroDAO;
