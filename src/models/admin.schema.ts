import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema(
	{
		name:
			{
				required: true,
				unique: true,
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
