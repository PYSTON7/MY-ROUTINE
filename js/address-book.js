function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.deleteContact = function(id) {

  this.contacts = this.contacts.filter(
    contact => contact.id !== id
  );
};