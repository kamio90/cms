import * as mongoose from 'mongoose';
import { PostInterface } from 'src/interfaces/post.interface';

/**
 * ***Mongoose schema for Post collection***
 * *Schema take 7 object name, title, description, modfiy, pageRef, pictureRef, elementRef*
 * @param {name} {String} - is required and must be unique
 * @param {title} {String} - is required and must be unique
 * @param {description} {String} - is required
 * @param {pageRef} {mongoose.Types.ObjectId} - reference to another mongoose model
 * @param {pictureRef} {mongoose.Types.ObjectId} - reference to another mongoose model
 * @param {pageRef} {mongoose.Types.ObjectId} - reference to another mongoose model
 */
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
