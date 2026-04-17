const noteservice = require("../service/service");

const createNote = (req, res) => {
    const note = req.body;
    const newNote = noteservice.addNote(note);

    res.status(201).json({
        message: "Note created",
        data: newNote
    });
};


const getnotes = async (req, res) => {
    try {
        const notes = await notesService.getNotes();

        res.status(200).json({ data: notes });

    } catch (err) {
        res.status(500).json({ message: "Error fetching notes" });
    }
};

const updatenote = (req, res) => {
    const id = Number(req.params.id);
    const updatedNote = req.body;
    const result = noteservice.updatenote(id, updatedNote);

    if (result) {
        res.json({
            message: "Note updated",
            data: result
        });
    } else {
        res.status(404).json({
            message: "Note not found"
        });
    }
};

const deletenote = (req, res) => {
    const id = Number(req.params.id);
    console.log("Deleting ID:", id);
    console.log("Params:", req.params);
    const result = noteservice.deleteNote(id);

    if (result) {
        res.json({
            message: "Note deleted"
        });
    } else {
        res.status(404).json({
            message: "Note not found"
        });
    }
};

const patchnote = (req, res) => {
    const id = Number(req.params.id);
    const updatedFields = req.body;
    const result = noteservice.patchnote(id, updatedFields);

    if (result) {
        res.json({
            message: "Note updated",
            data: result
        });
    } else {
        res.status(404).json({
            message: "Note not found"
        });
    }
};

module.exports = { createNote, getnotes, updatenote, deletenote, patchnote };
