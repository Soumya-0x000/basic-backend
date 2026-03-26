import express from 'express';

export const app = express();
app.use(express.json());

const notes = [];

app.get('/notes', (req, res) => {
    if (notes.length === 0) {
        return res.status(404).json({ message: 'No notes are there to show' });
    }
    return res.status(200).json({ message: 'All notes', notes });
});

app.get('/notes/:index', (req, res) => {
    const { index } = req.params;

    if (index < 0 || index >= notes.length) {
        if (notes.length === 0) {
            return res.status(404).json({ message: 'No notes are there to show' });
        }
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'notes fetched successfully', note: notes[index] });
});

app.post('/notes', (req, res) => {
    const { body } = req;
    notes.push(body);
    res.status(201).json({ message: 'Note added successfully' });
});

app.delete('/notes', (req, res) => {
    return res.status(400).json({
        message: 'identifier is required',
    });
});

app.delete('/notes/:index', (req, res) => {
    const { index } = req.params;

    if (!index) return res.status(400).json({ message: 'Index is required' });

    if (index < 0 || index >= notes.length) {
        return res.status(404).json({ message: 'Note not found' });
    }

    notes.splice(index, 1);
    res.status(200).json({ message: 'Note deleted successfully', notes });
});
