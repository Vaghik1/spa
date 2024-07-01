import { create } from 'zustand';

export interface Note {
    id: string;
    note: string;
}

interface NoteListState {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
}

export const useNoteListStore = create<NoteListState>((set) => ({
    notes: [],
    setNotes: (notes: Note[]) => set({ notes }),
    addNote: (note: Note) => set((state: NoteListState) => ({ notes: [...state.notes, note] })),
    removeNote: (id: string) => set((state: NoteListState) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}));
