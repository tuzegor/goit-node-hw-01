const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

listContacts().then((res) => console.log(res));
