import * as mongoose from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';

const UserSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            unique: true,
            type: String,
        },
        email: {
            required: true,
            unique: true,
            type: String,
        },
        surname: {
            required: true,
            type: String,
        },
        alias: {
            required: false,
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

export const UserModel = mongoose.model<UserInterface & mongoose.Document>(
    'UserModel',
    UserSchema
);
