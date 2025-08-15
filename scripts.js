// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

let allTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Kickstart your career journey",
    status: "todo",
  },
  {
    id: 2,
    title: "Conquer React",
    description: "Learn and master react",
    status: "todo",
  },
  {
    id: 3,
    title: "Understand databases",
    description: "Get a solid understanding of DB's",
    status: "todo",
  },
  {
    id: 4,
    title: "Crush frameworks",
    description: "Work with modern frameworks",
    status: "todo",
  },
  {
    id: 5,
    title: "Master JavaScript",
    description: "Deepdive into JS",
    status: "doing",
  },
  {
    id: 6,
    title: "Never give up",
    description: "Stay persistent",
    status: "doing",
  },
  {
    id: 7,
    title: "Explore ES6 Features",
    description: "Kickstart your career journey",
    status: "done",
  },
  { id: 8, title: "Have fun", description: "Enjoy coding", status: "done" },
];

function enterTaskDetails(newId) {
  let title = prompt(`Enter task ${newId} title:`);
  let description = prompt(`Enter task ${newId} description:`);
  let status = prompt(
    `Enter task ${newId} status (todo,doing,done):`
  ).toLowerCase();
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    status = prompt(
      `Enter task ${newId} status (todo, doing, done):`
    ).toLowerCase();
  }

  return { id: newId, title, description, status };
}
const newTaskLimit = 3;
let newTaskAdded = 0;

// create a push loop to add task to the end of the array
while (newTaskAdded < newTaskLimit) {
  const newId = allTasks.length + 1;

  if (allTasks.length < 8 + newTaskLimit) {
    const newTask = enterTaskDetails(newId);
    allTasks.push(newTask);
    newTaskAdded++;
  }
  if (allTasks.length >= 11) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
    break;
  }

  if (!newTask || !newTask.title) {
    break;
  }
}

const tasksDone = allTasks.filter(function (task) {
  return task.status === "done";
});

console.table(allTasks);
console.table(tasksDone);
