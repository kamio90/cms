import * as mongoose from 'mongoose';
import { UserInterface } from 'src/interfaces/user.interface';

/**
 * ***Mongoose schema for User collection***
 * *Schema take 5 object name, email, surname, alias and password*
 * @param {name} {String} - is required and must be unique
 * @param {email} {String} - is required and must be unique
 * @param {surname} {String} - is required
 * @param {alias} {String}
 * @param {password} {String} - is required
 */
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
