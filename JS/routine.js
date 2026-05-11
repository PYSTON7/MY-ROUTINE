function Routine(activity, timeOfDay) {
  this.activity = activity;
  this.timeOfDay = timeOfDay; // morning, afternoon, evening
  this.completed = false;
  this.id = Date.now(); // simple unique ID
}

// Mark a routine as complete
Routine.prototype.markComplete = function () {
  this.completed = true;
};

// Return 
Routine.prototype.getInfo = function () {
  return `${this.activity} (${this.timeOfDay})`;
};