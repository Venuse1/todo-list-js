const button = document.querySelector("button")
const input = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")
const checkIcon = document.querySelector("#checked")

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

const addTask = () =>{
    if(input.value ===""){
        alert("Empty input. Please write your task first.")
    } else{
        let newTask = document.createElement("div")
        newTask.classList.add("task")
        let newLi = document.createElement("li")
        newLi.innerText = input.value
        let deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid","fa-x")
        newTask.appendChild(newLi)
        newTask.appendChild(deleteIcon)
        listContainer.appendChild(newTask)
    }
    input.value = ""
    saveData()
}



button.addEventListener("click", addTask)
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addTask()
    }
})

listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
        saveData()
    } else if(event.target.tagName === "I"){
        event.target.parentElement.remove()
        saveData()
    }
})

showTasks()


