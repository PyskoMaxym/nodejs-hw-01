const { readContacts } = require('../utils/readContacts');

async function countContacts ()  {

    try{
        const contacts = await readContacts() || [];
        const count = contacts.length;
        console.log(`Total contacts: ${count}`);
        return count;
    } catch (error){
        console.error(error);
        return null;
    }
};

countContacts();
