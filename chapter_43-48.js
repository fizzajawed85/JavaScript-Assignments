// Assignment_43-48 (EVENTS)

/* 1. Show an alert box on click on a link. */

 // Add click event to show alert
    document.getElementById('alertLink').addEventListener('click', function(event) {
      event.preventDefault();  // Prevent link default behavior
      alert('Hello!');
    });


/* 2. Display some Mobile images in browser. On click on an
image Show the message in alert to user.*/

// Select all elements with class 'image-item'
const items = document.querySelectorAll('.image-item');

// Loop through each item
items.forEach(item => {
  // Add click event listener to each item
  item.addEventListener('click', () => {
    // Show alert with the message stored in 'data-msg' attribute
    alert(item.getAttribute('data-msg'));
  });
});


/* 3. Display 10 student records in table and each row should contain a delete
button. If you click on a button to delete a record, entire row should be
deleted.
Before delete
After click on delete button on “Mark ” row*/

// List of students with their details
let students = [
  { name: "Jhone", age: 17, grade: "A" },
  { name: "Deo", age: 18, grade: "B" },
  { name: "Mark", age: 16, grade: "A+" },
  { name: "James", age: 17, grade: "B+" }
];

// Select the tbody elements of both tables
const beforeBody = document.querySelector("#beforeTable tbody");
const afterBody = document.querySelector("#afterTable tbody");

// check if a student has been deleted
let isDeleted = false;

// Function to render both tables
function renderTables() {
  // Clear existing table rows
  beforeBody.innerHTML = "";
  afterBody.innerHTML = "";

  // Loop through students and create rows
  students.forEach((student, index) => {
    // Create a row for the 'Before Delete' table with a delete button
    const rowBefore = document.createElement("tr");
    rowBefore.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td><button data-index="${index}">Delete</button></td>
    `;
    beforeBody.appendChild(rowBefore);

    // If a student has been deleted, create rows for the 'After Delete' table (no delete buttons)
    if (isDeleted) {
      const rowAfter = document.createElement("tr");
      rowAfter.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
      `;
      afterBody.appendChild(rowAfter);
    }
  });

  // Add click event listeners to delete buttons
  const buttons = beforeBody.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const idx = button.getAttribute("data-index"); // Get index of student to delete
      students.splice(idx, 1); // Remove student from array
      isDeleted = true; // Mark that a delete has happened

      // Show the 'After Delete' table and its heading
      document.getElementById("afterTable").style.display = "table";
      document.getElementById("afterHeading").style.display = "block";

      renderTables(); // Re-render tables to update the display
    });
  });
}

// Initial rendering of tables when page loads
renderTables();


/* 4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout. */

// Select the image element
const flower = document.getElementById("flower");

// Path for the first image
const redRose = "images/rose_1.jpg";  

// Path for the second image 
const blackRose = "images/rose_2.avif";  

// Change to black rose on mouseover
flower.addEventListener("mouseover", () => {
  flower.src = blackRose;
  flower.alt = "Black Rose";
});

// Revert to red rose on mouseout
flower.addEventListener("mouseout", () => {
  flower.src = redRose;
  flower.alt = "Red Rose";
});


/* 5. Show a counter in browser. Counter should increase on click on increase
button and decrease on click on decrease button. And show updated counter
value in browser.*/

// Select elements
const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Initialize counter value
let counter = 0;

// Update counter display function
function updateDisplay() {
  countEl.textContent = counter;
}

// Increase button click event
increaseBtn.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

// Decrease button click event
decreaseBtn.addEventListener("click", () => {
  counter--;
  updateDisplay();
});

// Initial display update
updateDisplay();
