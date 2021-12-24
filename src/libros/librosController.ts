import LibroService from "./librosService";
const libroService = new LibroService();
import { Request, Response } from "express";
import createDTO from "./librosDTO";

class LibroController {
  constructor() {}

  async getLibros(req: Request, res: Response) {
    try {
      const libros = await libroService.getLibros();
      return res.send(libros);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getLibro(req: Request, res: Response) {
    try {
      const libro = await libroService.getLibro(req.params.id);
      res.status(200).json(libro);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createLibro(req: Request, res: Response) {
    try {
      const libro = await libroService.createLibro(req.body);
      return res.send(createDTO(libro));
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default LibroController;
