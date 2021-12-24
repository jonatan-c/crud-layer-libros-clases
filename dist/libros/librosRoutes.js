"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const librosController_1 = __importDefault(require("./librosController"));
const libroController = new librosController_1.default();
const router = (0, express_1.Router)();
router.get("/", libroController.getLibros);
router.get("/:id", libroController.getLibro);
router.post("/", libroController.createLibro);
module.exports = router;
//# sourceMappingURL=librosRoutes.js.map