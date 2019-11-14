import * as mongoose from 'mongoose';
import { PostInterface } from 'src/interfaces/post.interface';

const PostSchema = new mongoose.Schema(
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
        description: {
            required: true,
            type: String,
        },
        modify: {
            required: true,
            type: Boolean,
        },
        pageRef: {
            type: mongoose.Types.ObjectId,
            ref: 'PageModel',
        },
        pictureRef: {
            type: mongoose.Types.ObjectId,
            ref: 'PictureModel',
        },
        elementRef: {
            type: mongoose.Types.ObjectId,
            ref: 'ElementModel',
        },
    },
    {
        timestamps: true,
    }
);

export const PostModel = mongoose.model<PostInterface & mongoose.Document>(
    'PostModel',
    PostSchema
);
