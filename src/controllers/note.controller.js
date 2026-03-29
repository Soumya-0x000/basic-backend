import { Note } from '../models/note.model.js';

// GET all notes
export const getAllNotes = async (req, res) => {
    const notes = await Note.find({ isDeleted: false });

    res.status(200).json({
        message: 'Notes fetched successfully',
        notes,
    });
};

// GET single note
export const getNoteById = async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (!note || note.isDeleted) {
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({
        message: 'Note fetched successfully',
        note,
    });
};

// CREATE note
export const createNote = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const note = await Note.create({ title, description });

    res.status(201).json({
        message: 'Note created successfully',
        note,
    });
};

// UPDATE note
export const updateNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!note || note.isDeleted) {
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({
        message: 'Note updated successfully',
        note,
    });
};

// DELETE (soft delete)
export const deleteNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });

    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({
        message: 'Note deleted successfully',
        note,
    });
};
