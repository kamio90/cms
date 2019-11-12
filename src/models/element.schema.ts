import * as mongoose from 'mongoose';

export const ElementSchema = new mongoose.Schema(
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
		pageRef:
			{
				type: mongoose.Types.ObjectId,
				ref: 'PageModel'
			}
	},
	{
		timestamps: true
	}
);
