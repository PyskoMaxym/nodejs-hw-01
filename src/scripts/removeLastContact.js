import  readContacts  from "../utils/readContacts.js";
import writeContacts from "../utils/writeContacts.js";
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
export default removeLastContact;
