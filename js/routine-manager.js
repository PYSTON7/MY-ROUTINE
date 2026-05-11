manager.routines.forEach(function (routine) {

  if (routine.completed) {
    const li = document.createElement("li");
    li.textContent = routine.activity + " (Completed)";
    completedList.appendChild(li);
    return;
  }

  const li = document.createElement("li");
  li.textContent = routine.activity;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";

  completeBtn.addEventListener("click", function () {
    manager.markComplete(routine.id);
    renderRoutines();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    manager.removeRoutine(routine.id);
    renderRoutines();
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  if (routine.timeOfDay === "morning") {
    morningList.appendChild(li);
  } else if (routine.timeOfDay === "afternoon") {
    afternoonList.appendChild(li);
  } else {
    eveningList.appendChild(li);
  }
});