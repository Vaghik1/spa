import axios from 'axios';
import { Note } from '../store/useNoteListStore';

const API_URL = `${process.env.REACT_APP_API_HOST}/notes`;

export const fetchNotes = async (): Promise<Note[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createNote = async (note: Omit<Note, 'id'>): Promise<Note> => {
    const response = await axios.post(API_URL, note);
    return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
