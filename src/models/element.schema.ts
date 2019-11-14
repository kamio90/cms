import * as mongoose from 'mongoose';
import { ElementInterface } from 'src/interfaces/element.interface';

/**
 * ***Mongoose schema for Element collection***
 * *Schema take 3 object name, title and pageRef*
 * @param {name} {String} - is required and must be unique
 * @param {title} {String} - is required and must be unique
 * @param {pageRef} {mongoose.Types.ObjectId} - mongoose reference
 */
const ElementSchema = new mongoose.Schema(
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
        pageRef: {
            type: mongoose.Types.ObjectId,
            ref: 'PageModel',
        },
    },
    {
        timestamps: true,
    }
);

export const ElementModel = mongoose.model<
    ElementInterface & mongoose.Document
>('ElementModel', ElementSchema);
