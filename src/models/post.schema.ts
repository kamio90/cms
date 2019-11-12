import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema(
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
		description:
			{
				required: true,
				type: String
			},
		modify:
			{
				required: true,
				type: Boolean
			},
		pagesRef:
			{
				type: mongoose.Types.ObjectId,
				ref: 'PageModel'
			},
		picturesRef:
			{
				type: mongoose.Types.ObjectId,
				ref: 'PictureModel'
			},
		elementsRef:
			{
				type: mongoose.Types.ObjectId,
				ref: 'ElementModel'
			}
	},
	{
		timestamps: true
	}
);
