import * as mongoose from 'mongoose';
import { AdminInterface } from 'src/interfaces/admin.interface';

/**
 * ***Mongoose schema for Admin collection***
 * *Schema take 2 object name and password*
 * @param {name} {String} - is required and must be unique
 * @param {password} {String} - is required
 */
const AdminSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            unique: true,
            type: String,
        },
        password: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const AdminModel = mongoose.model<AdminInterface & mongoose.Document>(
    'AdminModel',
    AdminSchema
);
