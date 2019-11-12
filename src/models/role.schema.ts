import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema(
	{
		role:
			{
				type: String,
				required: true
			},
		active:
			{
				required: false,
				type: Boolean
			},
		userRef:
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'UserModel'
			}
	},
	{
		timestamps: true
	}
);
