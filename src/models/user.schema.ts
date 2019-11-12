import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
	{
		name:
			{
				required: true,
				unique: true,
				type: String
			},
		email:
			{
				required: true,
				unique: true,
				type: String
			},
		surname:
			{
				required: true,
				type: String
			},
		alias:
			{
				required: false,
				type: String
			},
		password:
			{
				required: true,
				unique: true,
				type: String
			}
	},
	{
		timestamps: true
	}
);
