import  readContacts  from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js";
import createFakeContact from "../utils/createFakeContact.js";

async function addOneContact  ()  {
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

export default addOneContact;
