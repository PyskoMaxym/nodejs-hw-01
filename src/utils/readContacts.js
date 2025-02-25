import { PATH_DB } from '../constants/contacts.js';

const fs = require('fs').promises;

async function readContacts ()  {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(data);
    } catch (error){
        console.error(error);
        return null;
    }
};

export default readContacts;