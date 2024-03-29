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
const librosService_1 = __importDefault(require("./librosService"));
const libroService = new librosService_1.default();
const librosDTO_1 = __importDefault(require("./librosDTO"));
class LibroController {
    constructor() { }
    getLibros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libros = yield libroService.getLibros();
                return res.send(libros);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libro = yield libroService.getLibro(req.params.id);
                res.status(200).json(libro);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    createLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libro = yield libroService.createLibro(req.body);
                return res.send((0, librosDTO_1.default)(libro));
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = LibroController;
//# sourceMappingURL=librosController.js.map