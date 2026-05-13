// ROUTINE PLANNER 

const manager = new RoutineManager();

const form = document.getElementById("routine-form");
const activityInput = document.getElementById("activity");
const timeInput = document.getElementById("time-of-day");

const morningList = document.getElementById("morning-list");
const afternoonList = document.getElementById("afternoon-list");
const eveningList = document.getElementById("evening-list");
const completedList = document.getElementById("completed-list");

// ADD ROUTINE
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const activity = activityInput.value.trim();
  const timeOfDay = timeInput.value;

  if (!activity) return;

  const routine = new Routine(activity, timeOfDay);

  manager.addRoutine(routine);

  form.reset();

  renderRoutines();
});

// RENDER ROUTINES
function renderRoutines() {
  morningList.innerHTML = "";
  afternoonList.innerHTML = "";
  eveningList.innerHTML = "";
  completedList.innerHTML = "";

  manager.routines.forEach(routine => {

    // COMPLETED TASKS
    if (routine.completed) {
      const li = document.createElement("li");
      li.textContent = routine.activity + " (Done)";

      // DELETE BUTTON FOR COMPLETED TASKS
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        manager.removeRoutine(routine.id);
        renderRoutines();
      });

      li.appendChild(deleteBtn);
      completedList.appendChild(li);

      return;
    }

    // NORMAL TASKS
    const li = document.createElement("li");
    li.textContent = routine.activity;

    // DONE BUTTON
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", () => {
      manager.markComplete(routine.id);
      renderRoutines();
    });

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      manager.removeRoutine(routine.id);
      renderRoutines();
    });

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    // ADD TO CORRECT SECTION
    if (routine.timeOfDay === "morning") {
      morningList.appendChild(li);
    } else if (routine.timeOfDay === "afternoon") {
      afternoonList.appendChild(li);
    } else {
      eveningList.appendChild(li);
    }

  });
}


// ADDRESS BOOK LOGIC

const addressBook = new AddressBook();

const contactForm = document.getElementById("contact-form");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");

const contactList = document.getElementById("contact-list");
const contactDetails = document.getElementById("contact-details");

// ADD CONTACT
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();

  const contact = new Contact(
    firstName,
    lastName,
    phone,
    address
  );

  addressBook.addContact(contact);

  contactForm.reset();

  renderContacts();
});

// RENDER CONTACTS
function renderContacts() {

  contactList.innerHTML = "";

  addressBook.contacts.forEach(contact => {

    const li = document.createElement("li");

    li.textContent = contact.fullName();

    // CLICK CONTACT
    li.addEventListener("click", function () {

      contactDetails.innerHTML = `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${contact.fullName()}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Address:</strong> ${contact.address}</p>
      `;
    });

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (e) {

      e.stopPropagation();

      addressBook.deleteContact(contact.id);

      renderContacts();

      contactDetails.innerHTML = "";
    });

    li.appendChild(deleteBtn);

    contactList.appendChild(li);
  });
}