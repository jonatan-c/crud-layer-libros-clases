"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const createDTO = (libro) => {
    return {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        fecha: libro.fecha,
        precio: libro.precio,
        categoria: libro.categoria,
    };
};
exports.default = createDTO;
//# sourceMappingURL=librosDTO.js.map