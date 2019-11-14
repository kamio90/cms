import * as mongoose from 'mongoose';
import { PageInterface } from 'src/interfaces/page.interface';

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
