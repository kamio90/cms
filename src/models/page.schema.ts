import * as mongoose from 'mongoose';
import { PageInterface } from 'src/interfaces/page.interface';

/**
 * ***Mongoose schema for Page collection***
 * *Schema take 3 object name, title and favorite*
 * @param {name} {String} - is required and must be unique
 * @param {title} {String} - is required
 * @param {favorite} {Boolean} - is required
 */
const PageSchema = new mongoose.Schema(
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
        favorite: {
            required: false,
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
);

export const PageModel = mongoose.model<PageInterface & mongoose.Document>(
    'PageModel',
    PageSchema
);
