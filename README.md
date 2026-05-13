## MY ROUTINE PLANNER
# Description
My Routine Planner, Address Book & Places You've Been is a JavaScript-based web application that helps users organize their daily life. It allows users to add and manage daily routines, store contact information, and track places they have visited. The project uses constructors, prototypes, and object-oriented JavaScript to manage data, while keeping business logic separate from the user interface. Users can add, view, and delete items, as well as view detailed information through an interactive UI.
# Author
Pyston Patrick
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

# Setup Instructions
1. Clone the repository: git clone https://github.com/PYSTON7/MY-ROUTINE.git
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

