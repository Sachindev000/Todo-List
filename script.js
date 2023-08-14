const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const todoList = document.querySelector('.todoList')


let editTodo = null

const addTodo = () => {
    const inputText = inputBox.value.trim()
    if (inputText.length <= 0) {
        alert("You Must Write Somthing in your Todo!!")
        return false
    }
    if (addBtn.value === 'Edit') {
        editTodo.target.previousElementSibling.innerHTML = inputText
        addBtn.value = 'Add'
        inputBox.value = ''
        
       
    
    } else {



// creating todo list

        const li = document.createElement("li")
        const p = document.createElement('p')
        p.innerHTML = inputText
        li.appendChild(p)
        inputBox.focus()

// creating edit button
        const editBtn = document.createElement('button')
        editBtn.classList.add('btn', 'editBtn')
        editBtn.innerText = 'Edit'
        li.appendChild(editBtn)
        

// creating delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('btn', 'deleteBtn')
        deleteBtn.innerText = 'Remove'
        li.appendChild(deleteBtn)
        



        todoList.appendChild(li)
        inputBox.value = ''
    }
    saveData()
}



// Update function

const updateTodo = (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'Remove') {

        todoList.removeChild(e.target.parentElement)
    }

    if (e.target.innerHTML === 'Edit') {
        inputBox.value = e.target.previousElementSibling.innerHTML
        inputBox.focus()
        addBtn.value = 'Edit'
        editTodo = e
    }
    saveData()


}

addBtn.addEventListener('click', addTodo)

todoList.addEventListener('click', updateTodo)


function saveData(){
    localStorage.setItem("data",todoList.innerHTML);
}

function showTask(){
    todoList.innerHTML = localStorage.getItem("data")
}
showTask()
