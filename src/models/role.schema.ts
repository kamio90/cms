import * as mongoose from 'mongoose';
import { RoleInterface } from 'src/interfaces/role.interface';

/**
 * ***Mongoose schema for Role collection***
 * *Schema take 3 object role, active and userRef*
 * @param {role} {String} - is required
 * @param {active} {Boolean}
 * @param {userRef} {mongoose.Types.ObjectId} - reference to another mongoose model
 */
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
