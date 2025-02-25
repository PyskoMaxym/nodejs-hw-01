import writeContacts from "../utils/writeContacts.js";
async function removeAllContacts ()  {

    try{
        await writeContacts([]);

        console.log('All contacts have been removed.');
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();

export default removeAllContacts;
