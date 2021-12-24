import LibroDAO from "./librosDAO";
import { ILibro } from "./librosInterface";
const libroDAO = new LibroDAO();

class LibroService {
  constructor() {}

  async getLibros(): Promise<ILibro[]> {
    const libros = await libroDAO.getLibros();
    return libros;
  }

  async getLibro(id: string): Promise<ILibro> {
    const libro = await libroDAO.getLibro(id);
    return libro;
  }

  async createLibro(libro: ILibro): Promise<ILibro> {
    const newLibro = await libroDAO.createLibro(libro);
    return newLibro;
  }
}

export default LibroService;
