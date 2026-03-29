import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 100,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 500,
        },
        status: {
            type: String,
            enum: ['pending', 'completed'],
            default: 'pending',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

export const Note = mongoose.model('Note', noteSchema);
