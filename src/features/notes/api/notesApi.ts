import axios from 'axios';
import { Note } from '../../types/NoteTypes';

const API_URL = `${process.env.REACT_APP_API_HOST}/notes`;

export const fetchNotes = async (): Promise<Note[] | undefined> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

export const createNote = async (note: Omit<Note, 'id'>): Promise<Note | undefined> => {
    try {
        const response = await axios.post(API_URL, note);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
    }
};

export const deleteNote = async (id: string): Promise<void | undefined> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting note with id ${id}:`, error);
    }
};
