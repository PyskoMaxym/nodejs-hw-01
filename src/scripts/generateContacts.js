import  readContacts  from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js";
import createFakeContact from "../utils/createFakeContact.js";

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
export default generateContacts;
