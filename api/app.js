import express from "express";
import cors from "cors";
import { getRoutes } from "./src/routes";

const app = express();

// Configuramos middlewares
app.use(cors());

// Configuramos rutas --> maneja las rutas de manera global
app.use("/", getRoutes());

// Iniciamos el servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
