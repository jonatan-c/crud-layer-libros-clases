// export class CreateLibroDTO {
//   titulo: string;
//   autor: string;
//   editorial: string;
//   fecha: string;
//   precio: number;
//   categoria: string;
// }
// readonly name: string;
// readonly description: string;
// readonly imageURL: string;
// readonly price: number;
// readonly createAt: Date;

import { ILibro } from "./librosInterface";

const createDTO = (libro: ILibro) => {
  return {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    fecha: libro.fecha,
    precio: libro.precio,
    categoria: libro.categoria,
  };
};

export default createDTO;
