import { Schema, model, Types } from 'mongoose'
import { User as IUser } from '../../types/user.types'

export const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  spaces: [{ type: Types.ObjectId, ref: 'Space' }],
})

const UserModel = model<IUser>('User', UserSchema)

export default UserModel
