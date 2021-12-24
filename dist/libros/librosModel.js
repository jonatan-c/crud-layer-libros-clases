"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LibroSchema = new mongoose_1.Schema({
    titulo: String,
    autor: String,
    editorial: String,
    fecha: String,
    precio: Number,
    categoria: String,
});
// module.exports = mongoose.model("Libro", LibroModel);
exports.default = (0, mongoose_1.model)("Libro", LibroSchema);
//# sourceMappingURL=librosModel.js.map