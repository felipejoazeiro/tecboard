import mongoose from "mongoose";

export const authorSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        name: { type: String, required: true },
        nationality: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

export const author = mongoose.models.Author || mongoose.model('Author', authorSchema);