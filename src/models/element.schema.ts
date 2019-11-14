import * as mongoose from 'mongoose';
import { ElementInterface } from 'src/interfaces/element.interface';

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
