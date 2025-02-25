import  readContacts  from "../utils/readContacts.js";
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
export default getAllContacts;
