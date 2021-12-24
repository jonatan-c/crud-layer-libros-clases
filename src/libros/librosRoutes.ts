import { Router } from "express";
import LibroController from "./librosController";
const libroController = new LibroController();
const router = Router();

router.get("/", libroController.getLibros);
router.get("/:id", libroController.getLibro);
router.post("/", libroController.createLibro);

module.exports = router;
