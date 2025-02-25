const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

async function generateContacts (number)  {

    try{
        const existingContacts = await readContacts() || [];
        const newContacts = Array.from({ length: number}, createFakeContact);
        const updatedContacts = [ ...existingContacts, ...newContacts];
        
        await writeContacts(updatedContacts);
        console.log(`${number} new contacts added successfully.`);
    } catch (error){
        console.error(error);
    }
};

generateContacts(5);
