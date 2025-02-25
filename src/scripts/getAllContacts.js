const { readContacts } = require('../utils/readContacts');

async function getAllContacts ()  {

    try{
        const contacts = await readContacts || [];
        console.log('Contacts', contacts);
        return contacts;
    } catch (error){
        console.error(error);
        return [];
    }

};

getAllContacts();
