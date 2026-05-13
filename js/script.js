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

      const name = document.createElement("span");
      name.textContent = contact.fullName();
      name.style.cursor = "pointer";

      const phone = document.createElement("p");
phone.textContent = `Phone: ${contact.phone}`;

const address = document.createElement("p");
address.textContent = `Address: ${contact.address}`;


      name.onclick = function () {
        contactDetails.innerHTML = `
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> ${contact.fullName()}</p>
          <p><strong>Phone:</strong> ${contact.phone}</p>
          <p><strong>Address:</strong> ${contact.address}</p>
        `;
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      deleteBtn.onclick = function (e) {
        e.stopPropagation();

        addressBook.deleteContact(contact.id);

        renderContacts();

        contactDetails.innerHTML = "";
      };

      li.appendChild(name);
      li.appendChild(deleteBtn);

      contactList.appendChild(li);
    });
  }

});
// PLACES YOU'VE BEEN
document.addEventListener("DOMContentLoaded", function () {

  // Constructor
  function Place(name, location, landmarks, timeOfYear, notes) {
    this.name = name;
    this.location = location;
    this.landmarks = landmarks; // string, comma-separated
    this.timeOfYear = timeOfYear;
    this.notes = notes;
    this.id = crypto.randomUUID(); // unique identifier
  }

  // full info of the place
  Place.prototype.fullInfo = function () {
    return `${this.name} - ${this.location} (${this.timeOfYear})`;
  };

  // Manager to store all places
  function PlaceManager() {
    this.places = [];
  }

  // Add a place
  PlaceManager.prototype.addPlace = function (place) {
    this.places.push(place);
  };

  // Delete a place
  PlaceManager.prototype.deletePlace = function (id) {
    this.places = this.places.filter(place => place.id !== id);
  };

  // Manager
  const manager = new PlaceManager();

  // DOM elements
  const placeForm = document.getElementById("place-form");
  const nameInput = document.getElementById("place-name");
  const locationInput = document.getElementById("place-location");
  const landmarksInput = document.getElementById("place-landmarks");
  const timeInput = document.getElementById("place-time");
  const notesInput = document.getElementById("place-notes");

  const placeList = document.getElementById("place-list");
  const placeDetails = document.getElementById("place-details");

  // Add Place Event
  placeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const location = locationInput.value.trim();
    const landmarks = landmarksInput.value.trim();
    const timeOfYear = timeInput.value.trim();
    const notes = notesInput.value.trim();

    if (!name || !location) return; // required fields

    const place = new Place(name, location, landmarks, timeOfYear, notes);
    manager.addPlace(place);

    placeForm.reset();
    renderPlaces();
  });

  // Render Places
  function renderPlaces() {
    placeList.innerHTML = "";
    placeDetails.innerHTML = "";

    manager.places.forEach(place => {
      const li = document.createElement("li");

      // Place Name clickable
      const nameSpan = document.createElement("span");
      nameSpan.textContent = place.name;
      nameSpan.style.cursor = "pointer";
      nameSpan.onclick = function () {
        placeDetails.innerHTML = `
          <h3>${place.name}</h3>
          <p><strong>Location:</strong> ${place.location}</p>
          <p><strong>Landmarks:</strong> ${place.landmarks || "None"}</p>
          <p><strong>Time of Year:</strong> ${place.timeOfYear || "N/A"}</p>
          <p><strong>Notes:</strong> ${place.notes || "None"}</p>
        `;
      };

      // Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        manager.deletePlace(place.id);
        renderPlaces();
      };

      li.appendChild(nameSpan);
      li.appendChild(deleteBtn);

      placeList.appendChild(li);
    });
  }

});