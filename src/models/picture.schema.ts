import * as mongoose from 'mongoose';
import { PictureInterface } from 'src/interfaces/picture.interface';

const PictureSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
            unique: true,
        },
        title: {
            required: true,
            type: String,
            unique: true,
        },
        alt: {
            required: true,
            type: String,
            unique: true,
        },
        base64: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const PictureModel = mongoose.model<
    PictureInterface & mongoose.Document
>('PictureModel', PictureSchema);
