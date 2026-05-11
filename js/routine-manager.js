function RoutineManager() {
  this.routines = [];
}

// Add a routine
RoutineManager.prototype.addRoutine = function (routine) {
  this.routines.push(routine);
};

// Remove a routine by ID
RoutineManager.prototype.removeRoutine = function (id) {
  this.routines = this.routines.filter(function (routine) {
    return routine.id !== id;
  });
};

// Get routines by time of day
RoutineManager.prototype.getByTime = function (timeOfDay) {
  return this.routines.filter(function (routine) {
    return routine.timeOfDay === timeOfDay;
  });
};

// Mark a routine as complete by ID
RoutineManager.prototype.markComplete = function (id) {
  const routine = this.routines.find(function (r) {
    return r.id === id;
  });

  if (routine) {
    routine.markComplete();
  }
};

// Get all completed routines
RoutineManager.prototype.getCompleted = function () {
  return this.routines.filter(function (routine) {
    return routine.completed;
  });
};