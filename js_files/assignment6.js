var a = 5;
var b = 10;
var c = "Muzaffar";
var d = "Kapezov";

function changeText() {
    document.getElementById("text").innerText = "WE MAJOR";
}

console.log("Muzaffar SE-2420");
alert("Hello, JavaScript world!!!");

console.log(a + b);
console.log(c + " " + d);

//Task 3. Changing Styles
document.getElementById("changeColor").addEventListener("click", function () {
    const colors = ['#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("container").style.backgroundColor = randomColor;
});

let fontSize = 16;
document.getElementById("changeFontSize").addEventListener("click", function () {
    fontSize += 2;
    document.getElementById("text2").style.fontSize = fontSize + "px";
});


//Task 4. Creating & Removing Elements
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');
const itemList = document.getElementById('itemList');

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = '_Item_';
    itemList.appendChild(newItem);
});

removeItemButton.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
});


//Task 5. Mouse Events
const colorBox = document.getElementById('joyBox');

colorBox.addEventListener('mouseover', function () {
    colorBox.style.backgroundColor = 'lightgreen';
});

colorBox.addEventListener('mouseout', function () {
    colorBox.style.backgroundColor = 'lightblue';
});


//Task 6. Keyboard Events
const inputField = document.getElementById('inputField');
const displayValue = document.getElementById('displayValue');

inputField.addEventListener('keyup', function () {
    displayValue.textContent = inputField.value;
});

//Task 7. Form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('error_message');

    errorMessage.innerHTML = '';

    if (name === null || email === '' || password === '') {
        errorMessage.innerHTML = 'You forgot something.........................';
        return false;
    }

    return true;
}


//Task 8. To do list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = {
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const textNode = document.createTextNode(task.text);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete_btn');
        deleteBtn.textContent = 'Delete';

        li.addEventListener('click', function () {
            task.completed = !task.completed;
            renderTasks();
        });

        deleteBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(textNode);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
