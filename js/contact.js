function Contact(firstName, lastName, phone, address) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.address = address;

  this.id = crypto.randomUUID();
}

Contact.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};