// const { Routine } = require("../js/routine");
// const { RoutineManager } = require("../js/routine-manager");

// describe("Routine Constructor", () => {

//   test("should create a routine object with correct properties", () => {
//     const routine = new Routine("Go for a walk", "morning");

//     expect(routine.activity).toBe("Go for a walk");
//     expect(routine.timeOfDay).toBe("morning");
//     expect(routine.completed).toBe(false);
//     expect(routine.id).toBeDefined();
//   });

//   test("should mark routine as complete", () => {
//     const routine = new Routine("Study", "afternoon");

//     routine.markComplete();

//     expect(routine.completed).toBe(true);
//   });

//   test("should return formatted info", () => {
//     const routine = new Routine("Read", "evening");

//     expect(routine.getInfo()).toBe("Read (evening)");
//   });

// });

// describe("RoutineManager", () => {

//   test("should add routine to array", () => {
//     const manager = new RoutineManager();
//     const routine = new Routine("Gym", "morning");

//     manager.addRoutine(routine);

//     expect(manager.routines.length).toBe(1);
//   });

//   test("should remove routine by id", () => {
//     const manager = new RoutineManager();
//     const routine = new Routine("Gym", "morning");

//     manager.addRoutine(routine);
//     manager.removeRoutine(routine.id);

//     expect(manager.routines.length).toBe(0);
//   });

//   test("should mark routine as complete by id", () => {
//     const manager = new RoutineManager();
//     const routine = new Routine("Walk", "evening");

//     manager.addRoutine(routine);
//     manager.markComplete(routine.id);

//     expect(routine.completed).toBe(true);
//   });

//   test("should filter routines by time of day", () => {
//     const manager = new RoutineManager();

//     manager.addRoutine(new Routine("Gym", "morning"));
//     manager.addRoutine(new Routine("Study", "afternoon"));

//     const morning = manager.getByTime("morning");

//     expect(morning.length).toBe(1);
//     expect(morning[0].activity).toBe("Gym");
//   });

// });