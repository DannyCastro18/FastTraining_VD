require("dotenv").config();
const express = require("express");
const cors = require("cors");

/* "dev": "next dev --turbopack", */ // Esto va en package.json, pero ahí no permite comentarios :v
const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas (a crear en el siguiente paso)
const usuariosRouter = require("./routes/usuarios");
app.use("/api/usuarios", usuariosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));