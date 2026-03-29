import express from 'express';
import { asyncHandler } from '../lib/asyncHandler.js';
import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
} from '../controllers/note.controller.js';

const noteRoutes = express.Router();

noteRoutes.get('/', asyncHandler(getAllNotes));
noteRoutes.get('/:id', asyncHandler(getNoteById));
noteRoutes.post('/', asyncHandler(createNote));
noteRoutes.patch('/:id', asyncHandler(updateNote));
noteRoutes.delete('/:id', asyncHandler(deleteNote));

export default noteRoutes;
