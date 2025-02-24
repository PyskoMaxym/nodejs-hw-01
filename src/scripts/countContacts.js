const { readContacts } = require('../utils/readContacts');

export const countContacts = async () => {

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

console.log(await countContacts());
