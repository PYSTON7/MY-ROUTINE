# MY ROUTINE PLANNER
Routine Planner is a web application that helps users organize morning, afternoon, and evening activities using JavaScript constructors and prototypes.
# AUTHOR 
Pyston Patrick
# Description
My Routine Planner is a simple JavaScript application that helps users organize their daily activities into morning, afternoon, and evening routines. Users can add activities, mark them as complete, and delete them when no longer needed.
# Features
- Add activities with time of day (morning, afternoon, evening)
- Store activities as JavaScript objects
- Mark activities as completed
- Delete activities
- View completed tasks separately
# Technologies Used
- HTML
- CSS
- JavaScript
- Constructors & Prototypes
- DOM Manipulation
- Test-Driven Development

## Warm-Up Questions
# 1. Difference between object literal and constructor
Object literal creates a single object directly, while a constructor allows you to create multiple objects with the same structure using the `new` keyword.
# 2. Benefits of constructors
- Reusability
- Cleaner code for multiple objects
- Easier scaling of applications
# 3. What is a prototype?
A prototype is a shared object that allows all instances created from a constructor to share methods, instead of duplicating them in memory.

# Setup Instructions
1. Clone the repository:
bash
git clone https://github.com/PYSTON7/MY-ROUTINE.git
2. To view the project: https://pyston7.github.io/MY-ROUTINE/

## TEST DRIVEN DEVELOPMENT (PSEUDO-CODED TESTS)
# Routine Constructor
It should create a routine object with:
activity (string)
timeOfDay (string)
completed (false by default)
id (unique number)
It should be able to mark a routine as complete:
markComplete() sets completed to true
# RoutineManager
It should store all routines in an array
It should add a routine to the array
It should remove a routine using its id
It should mark a routine as complete using its id
It should return routines based on time of day:
morning
afternoon
evening
# UI (Basic Behavior)
It should add a routine when the form is submitted
It should display routines in the correct section
It should move completed routines to a completed list
It should delete routines when the delete button is clicked
It should update the UI after every change

# Lisence 
MIT Lisence
# Copyright
© 2026 My-Routine. All rights reserved.

