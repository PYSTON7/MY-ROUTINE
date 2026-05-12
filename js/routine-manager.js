function RoutineManager() {
  this.routines = [];
}

RoutineManager.prototype.addRoutine = function (routine) {
  this.routines.push(routine);
};

RoutineManager.prototype.removeRoutine = function (id) {
  this.routines = this.routines.filter(r => r.id !== id);
};

RoutineManager.prototype.markComplete = function (id) {
  const routine = this.routines.find(r => r.id === id);
  if (routine) routine.markComplete();
};

RoutineManager.prototype.getByTime = function (timeOfDay) {
  return this.routines.filter(r => r.timeOfDay === timeOfDay);
};

module.exports = { RoutineManager };