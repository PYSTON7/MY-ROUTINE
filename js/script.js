// INIT AFTER DOM LOAD


document.addEventListener("DOMContentLoaded", function () {

  
  // ROUTINE PLANNER


  const manager = new RoutineManager();

  const form = document.getElementById("routine-form");
  const activityInput = document.getElementById("activity");
  const timeInput = document.getElementById("time-of-day");

  const morningList = document.getElementById("morning-list");
  const afternoonList = document.getElementById("afternoon-list");
  const eveningList = document.getElementById("evening-list");
  const completedList = document.getElementById("completed-list");

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

  function renderRoutines() {
    morningList.innerHTML = "";
    afternoonList.innerHTML = "";
    eveningList.innerHTML = "";
    completedList.innerHTML = "";

    manager.routines.forEach(routine => {

      // COMPLETED
      if (routine.completed) {
        const li = document.createElement("li");
        li.textContent = routine.activity + " (Done)";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = () => {
          manager.removeRoutine(routine.id);
          renderRoutines();
        };

        li.appendChild(deleteBtn);
        completedList.appendChild(li);
        return;
      }

      // ACTIVE TASK
      const li = document.createElement("li");
      li.textContent = routine.activity;

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Done";

      doneBtn.onclick = () => {
        manager.markComplete(routine.id);
        renderRoutines();
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      deleteBtn.onclick = () => {
        manager.removeRoutine(routine.id);
        renderRoutines();
      };

      li.appendChild(doneBtn);
      li.appendChild(deleteBtn);

      if (routine.timeOfDay === "morning") {
        morningList.appendChild(li);
      } else if (routine.timeOfDay === "afternoon") {
        afternoonList.appendChild(li);
      } else {
        eveningList.appendChild(li);
      }
    });
  }


 
  // ADDRESS BOOK


  const addressBook = new AddressBook();

  const contactForm = document.getElementById("contact-form");

  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");

  const contactList = document.getElementById("contact-list");
  const contactDetails = document.getElementById("contact-details");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();

    if (!firstName || !lastName) return;

    const contact = new Contact(firstName, lastName, phone, address);

    addressBook.addContact(contact);

    contactForm.reset();

    renderContacts();
  });

 function renderContacts() {
  contactList.innerHTML = "";

  addressBook.contacts.forEach(contact => {

    const li = document.createElement("li");
    li.style.padding = "8px";
    li.style.borderBottom = "1px solid #ddd";

    // NAME (CLICKABLE)
    const name = document.createElement("span");
    name.textContent = contact.fullName();
    name.style.cursor = "pointer";
    name.style.fontWeight = "bold";
    name.style.display = "block";

    name.onclick = function () {
      contactDetails.innerHTML = `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${contact.fullName()}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Address:</strong> ${contact.address}</p>
      `;
    };

    // PHONE + ADDRESS UNDER NAME
    const info = document.createElement("div");
    info.style.fontSize = "0.9em";
    info.style.color = "#555";
    info.style.marginTop = "4px";

    info.innerHTML = `
      <div>📞 ${contact.phone}</div>
      <div>🏠 ${contact.address}</div>
    `;

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginTop = "5px";

    deleteBtn.onclick = function (e) {
      e.stopPropagation();

      addressBook.deleteContact(contact.id);

      renderContacts();

      contactDetails.innerHTML = "";
    };

    li.appendChild(name);
    li.appendChild(info);
    li.appendChild(deleteBtn);

    contactList.appendChild(li);
  });
}