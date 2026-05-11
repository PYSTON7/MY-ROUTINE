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

  const routine = new Routine(activity, timeOfDay);

  manager.addRoutine(routine);

  form.reset();

  render();
});

function render() {
  morningList.innerHTML = "";
  afternoonList.innerHTML = "";
  eveningList.innerHTML = "";
  completedList.innerHTML = "";

  manager.routines.forEach(routine => {

    // COMPLETED
    if (routine.completed) {
      const li = document.createElement("li");
      li.textContent = routine.activity + " (Done)";
      completedList.appendChild(li);
      return;
    }

    const li = document.createElement("li");
    li.textContent = routine.activity;

    // DONE BUTTON
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
      manager.markComplete(routine.id);
      render();
    });

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      manager.removeRoutine(routine.id);
      render();
    });

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