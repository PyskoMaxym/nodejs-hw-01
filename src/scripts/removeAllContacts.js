const { writeContacts } = require('../utils/writeContacts');

export const removeAllContacts = async () => {

    try{
        await writeContacts([]);

        console.log('All contacts have been removed.');
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
