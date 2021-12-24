"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("./config/db.config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_config_1.default)();
app.use("/", require("./libros/librosRoutes"));
exports.default = app;
//# sourceMappingURL=app.js.map