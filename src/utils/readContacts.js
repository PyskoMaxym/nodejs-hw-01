import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

async function readContacts ()  {
    try{
        const data = await readFile(PATH_DB, 'utf-8');
        return JSON.parse(data);
    } catch (error){
        console.error(error);
        return null;
    }
};

export default readContacts;