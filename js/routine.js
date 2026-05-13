function Routine(activity, timeOfDay) {
  this.activity = activity;
  this.timeOfDay = timeOfDay;
  this.completed = false;
  this.id = Date.now();
}

Routine.prototype.markComplete = function () {
  this.completed = true;
};

Routine.prototype.getInfo = function () {
  return `${this.activity} (${this.timeOfDay})`;
};

