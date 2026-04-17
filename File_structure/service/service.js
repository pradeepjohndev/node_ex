const pool = require('../config/dbpool');

let notes = [];

exports.addNote = async (note) => {
    const result = await pool.query(
        "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
        [note.title, note.content]
    );
    return result.rows[0];
    // note.id = notes.length + 1;
    // notes.push(note);
    // return note;
};

exports.getAllNotes = async () => {
    const result = await pool.query("SELECT * FROM notes ORDER BY id");
    return result.rows;
};

exports.updatenote = (id, updatedNote) => {
    const index = notes.findIndex(note => note.id === Number(id));
    if (index !== -1) {
        notes[index] = { ...notes[index], ...updatedNote };
        return notes[index];
    }
    return null;
}

exports.deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === Number(id));
    if (index !== -1) {
        notes.splice(index, 1);
        return true;
    }
    return false;
};

exports.patchnote = (id, updatedFields) => {
    const index = notes.findIndex(note => note.id === Number(id));
    if (index !== -1) {
        notes[index] = { ...notes[index], ...updatedFields };
        Object.assign(notes[index], updatedFields);
        return notes[index];
    }
    return null;
};