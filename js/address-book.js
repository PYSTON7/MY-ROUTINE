function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.findContact = function (id) {
  return this.contacts.find(contact => contact.id === id);
};

AddressBook.prototype.deleteContact = function (id) {
  this.contacts = this.contacts.filter(contact => contact.id !== id);
};

module.exports = { AddressBook };