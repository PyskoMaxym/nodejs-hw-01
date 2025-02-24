const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

export const addOneContact = async () => {
    try{
        const existingContacts = await readContacts() || [];
        
        const newContact = createFakeContact();
        
        const updatedContacts = [...existingContacts, newContact];
        
        await writeContacts(updatedContacts);
        
        console.log('New contact added successfully:', newContact);
    } catch (error) {
        console.error(error);
    }
};

addOneContact();
