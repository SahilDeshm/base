type Note = {
    title: string;
    body: string;
  };

let notes: Note[] = [];

export function addNote(note: Note){
    notes.push(note);
}

export function getNoteCount() {
        return notes.length;
}

export function getAllNotes(){
    return notes;
}