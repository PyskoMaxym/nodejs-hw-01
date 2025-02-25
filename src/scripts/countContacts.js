import  readContacts  from "../utils/readContacts.js";
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
export default countContacts;
