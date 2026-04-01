import express from 'express';
import { asyncHandler } from '../lib/asyncHandler.js';
import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
} from '../controllers/note.controller.js';
import { validateObjectId } from '../lib/validateMongoId.js';

const noteRoutes = express.Router();

noteRoutes.get('/', asyncHandler(getAllNotes));
noteRoutes.get('/:id', validateObjectId, asyncHandler(getNoteById));
noteRoutes.post('/', asyncHandler(createNote));
noteRoutes.patch('/:id', validateObjectId, asyncHandler(updateNote));
noteRoutes.delete('/:id', validateObjectId, asyncHandler(deleteNote));

export default noteRoutes;
