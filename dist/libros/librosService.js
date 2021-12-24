"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const librosDAO_1 = __importDefault(require("./librosDAO"));
const libroDAO = new librosDAO_1.default();
class LibroService {
    constructor() { }
    getLibros() {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield libroDAO.getLibros();
            return libros;
        });
    }
    getLibro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const libro = yield libroDAO.getLibro(id);
            return libro;
        });
    }
    createLibro(libro) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLibro = yield libroDAO.createLibro(libro);
            return newLibro;
        });
    }
}
exports.default = LibroService;
//# sourceMappingURL=librosService.js.map