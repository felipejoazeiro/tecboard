import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor.trim().length > 0,
  message: ({ PATH }) => `O campo '${PATH}' é obrigatório.`
});