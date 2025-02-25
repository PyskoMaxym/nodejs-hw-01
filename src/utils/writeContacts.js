import { PATH_DB } from '../constants/contacts.js';
const fs = require('fs').promises;


async function writeContacts (updatedContacts)  {
    try{
        await fs.writeFile( PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
    } catch (error){
            console.error(error);
        }
};

export default writeContacts;