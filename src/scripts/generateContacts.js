const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

const generateContacts = async (number) => {

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
