const { readContacts } = require('../utils/readContacts');

export const getAllContacts = async () => {

    try{
        const contacts = await readContacts || [];
        console.log('Contacts', contacts);
        return contacts;
    } catch (error){
        console.error(error);
        return [];
    }

};

console.log(await getAllContacts());
