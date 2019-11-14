import * as mongoose from 'mongoose';
import { PictureInterface } from 'src/interfaces/picture.interface';

/**
 * ***Mongoose schema for Picture collection***
 * *Schema take 4 object name, title, alt and base64*
 * @param {name} {String} - is required and must be unique
 * @param {title} {String} - is required and must be unique
 * @param {alt} {String} - is required and must be unique
 * @param {base64} {String} - is required
 */
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
