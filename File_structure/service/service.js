let notes = [];

exports.addNote = (note) => {
    note.id = notes.length + 1;
    notes.push(note);
    return note;
};

exports.getAllNotes = () => {
    return notes;
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