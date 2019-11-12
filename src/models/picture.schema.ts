import * as mongoose from 'mongoose';

export const PictureSchema = new mongoose.Schema(
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
		alt:
			{
				required: true,
				type: String,
				unique: true
			},
		base64:
			{
				required: true,
				type: String
			}
	},
	{
		timestamps: true
	}
);
