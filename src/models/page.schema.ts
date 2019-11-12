import * as mongoose from 'mongoose';

export const PageSchema = new mongoose.Schema(
	{
		name:
			{
				required: true,
				type: String,
				unique: true
			},
		title:
			{
				required: true,
				type: String,
				unique: true
			},
		favorite:
			{
				required: false,
				type: Boolean
			}
	},
	{
		timestamps: true
	}
);
