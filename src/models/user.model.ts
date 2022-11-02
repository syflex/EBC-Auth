import mongoose from 'mongoose'
import { hashSync, genSaltSync, compareSync } from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.pre('save', function (next) {
    if (this.password) {
        const salt = genSaltSync(10)
        this.password = hashSync(this.password, salt)
    }

    next()
})

userSchema.methods.validPassword = function (password: string) {
    return compareSync(password, this.password)
}

userSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

const User = mongoose.model('user', userSchema)

export default User
