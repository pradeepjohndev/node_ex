const noteservice = require("../services/notes_service");

exports.createNote = (req, res) => {
    const note = req.body;
    const newNote = notesService.addNote(note);

    res.status(201).json({
        message: "Note created",
        data: newNote
    });
};

exports.getnotes = (req, res) => {
    const notes = noteservice.getnotes();
    res.json(notes);
    res.status(200).json({
        message: "Notes retrieved",
        data: notes
    });
};

exports.updatenote = (req, res) => {
    const id = req.params.id;
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

exports.deletenote = (req, res) => {
    const id = req.params.id;
    const result = noteservice.deletenote(id);

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
