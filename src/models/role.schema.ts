import * as mongoose from 'mongoose';
import { RoleInterface } from 'src/interfaces/role.interface';

const RoleSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            required: true,
        },
        active: {
            required: false,
            type: Boolean,
        },
        userRef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel',
        },
    },
    {
        timestamps: true,
    }
);

export const RoleModel = mongoose.model<RoleInterface & mongoose.Document>(
    'RoleModel',
    RoleSchema
);
