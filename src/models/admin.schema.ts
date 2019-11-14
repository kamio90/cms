import * as mongoose from 'mongoose';
import { AdminInterface } from 'src/interfaces/admin.interface';

const AdminSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            unique: true,
            type: String,
        },
        password: {
            required: true,
            unique: true,
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
