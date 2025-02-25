const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
async function removeLastContact ()  {

    try{
        const contacts = await readContacts();

        if(contacts.length === 0) {
            return;
        }
        contacts.pop();
        await writeContacts(contacts);
    }catch (error){
        console.error(error);
    }
};

removeLastContact();
