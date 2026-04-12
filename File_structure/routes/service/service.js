let notes = [];

exports.addNote = (note) => {
    note.id = notes.length + 1;
    notes.push(note);
    return note;
};

exports.getAllNotes = () => {
    return notes;
};

exports.updateNote = (id, updatedNote) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = { ...notes[index], ...updatedNote };
        return notes[index];
    }
    return null;
}

exports.deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        return true;
    } else {
        return false;
    }
};