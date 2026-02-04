import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);
//app.use("/api/product", productRoutes); --- when the products routes are available

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
