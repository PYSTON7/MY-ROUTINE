// Create manager instance
const manager = new RoutineManager();

// DOM ELEMENTS
const form = document.getElementById("routine-form");
const activityInput = document.getElementById("activity");
const timeInput = document.getElementById("time-of-day");

const morningList = document.getElementById("morning-list");
const afternoonList = document.getElementById("afternoon-list");
const eveningList = document.getElementById("evening-list");

// FORM SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const activity = activityInput.value;
  const timeOfDay = timeInput.value;

  // Create new routine object
  const routine = new Routine(activity, timeOfDay);

  // Add to manager
  manager.addRoutine(routine);

  // Clear form
  form.reset();

  // Re-render UI
  renderRoutines();
});

// RENDER FUNCTION
function renderRoutines() {
  // Clear all lists
  morningList.innerHTML = "";
  afternoonList.innerHTML = "";
  eveningList.innerHTML = "";

  // Loop through routines
  manager.routines.forEach(function (routine) {
    const li = document.createElement("li");

    li.textContent = routine.activity;

    // Style if completed
    if (routine.completed) {
      li.style.textDecoration = "line-through";
    }

    // COMPLETE BUTTON
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";

    completeBtn.addEventListener("click", function () {
      manager.markComplete(routine.id);
      renderRoutines();
    });

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      manager.removeRoutine(routine.id);
      renderRoutines();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Place into correct section
    if (routine.timeOfDay === "morning") {
      morningList.appendChild(li);
    } else if (routine.timeOfDay === "afternoon") {
      afternoonList.appendChild(li);
    } else {
      eveningList.appendChild(li);
    }
  });
}