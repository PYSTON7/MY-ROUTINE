describe("Routine", () => {

  test("It should create a routine object with correct properties", () => {
    const routine = new Routine("Go for a walk", "morning");

    expect(routine.activity).toBe("Go for a walk");
    expect(routine.timeOfDay).toBe("morning");
    expect(routine.completed).toBe(false);
    expect(routine.id).toBeDefined();
  });

  test("It should mark a routine as complete", () => {
    const routine = new Routine("Study coding", "afternoon");

    routine.markComplete();

    expect(routine.completed).toBe(true);
  });

  test("It should return formatted routine info", () => {
    const routine = new Routine("Read book", "evening");

    expect(routine.getInfo()).toBe("Read book (evening)");
  });

});

describe("RoutineManager", () => {

  test("It should add a routine", () => {
    const manager = new RoutineManager();
    const routine = new Routine("Gym", "morning");

    manager.addRoutine(routine);

    expect(manager.routines.length).toBe(1);
  });

  test("It should remove a routine by id", () => {
    const manager = new RoutineManager();
    const routine = new Routine("Gym", "morning");

    manager.addRoutine(routine);
    manager.removeRoutine(routine.id);

    expect(manager.routines.length).toBe(0);
  });

  test("It should get routines by time of day", () => {
    const manager = new RoutineManager();

    manager.addRoutine(new Routine("Gym", "morning"));
    manager.addRoutine(new Routine("Study", "afternoon"));

    const morningRoutines = manager.getByTime("morning");

    expect(morningRoutines.length).toBe(1);
    expect(morningRoutines[0].activity).toBe("Gym");
  });

  test("It should mark a routine as complete using manager", () => {
    const manager = new RoutineManager();
    const routine = new Routine("Walk", "evening");

    manager.addRoutine(routine);
    manager.markComplete(routine.id);

    expect(routine.completed).toBe(true);
  });

  test("It should return completed routines", () => {
    const manager = new RoutineManager();

    const r1 = new Routine("Walk", "morning");
    const r2 = new Routine("Study", "afternoon");

    manager.addRoutine(r1);
    manager.addRoutine(r2);

    manager.markComplete(r1.id);

    const completed = manager.getCompleted();

    expect(completed.length).toBe(1);
    expect(completed[0].activity).toBe("Walk");
  });

});