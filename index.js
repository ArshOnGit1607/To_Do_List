

let task = document.getElementById("taskInput")
let btn= document.getElementById("addButton")
let list = document.getElementById("taskList")
// let completed = document.getElementById("complete")

let li=[]
btn.addEventListener(("click"),handleClick)
function handleClick(){
    const inputValue = task.value
    if (inputValue.trim()!=="") {
        li.push(inputValue)
    }
    let taskContainer=document.createElement("div")
        taskContainer.className="taskContainer"
    let listItem=document.createElement("li")
        listItem.innerText=inputValue
        listItem.className="tasks"
    let deleteBtn=document.createElement("button")
        deleteBtn.innerText="🗑️"
        deleteBtn.className="btns"
        deleteBtn.id="delete"
    let editBtn=document.createElement("button")
        editBtn.id="edit"
        editBtn.className="btns"
        editBtn.innerText="🖊️"
    let completed=document.createElement("button")
        completed.className="btns"
        completed.id="complete"
        completed.innerText="✅"
    taskContainer.appendChild(listItem)
    taskContainer.appendChild(deleteBtn)
    taskContainer.appendChild(completed)
    taskContainer.appendChild(editBtn)
    list.appendChild(taskContainer)
        deleteBtn.addEventListener("click",()=>{
            const inputValue=task.value
            if(inputValue.trim()!==""){
                li.splice(li.indexOf(inputValue),1)
            }
            list.removeChild(taskContainer)
        })
        completed.addEventListener("click",()=>{
            if(inputValue.trim()!==""){
                li.splice(li.indexOf(inputValue),1)
            }
            listItem.style.textDecoration="line-through"
        })
// start
        // Edit button: toggle between edit mode (input + save) and view mode
        let editInput = null
        let originalValue = null
        editBtn.addEventListener("click",()=>{
            // If not editing yet, enter edit mode
            if (editBtn.innerText === "🖊️") {
                originalValue = listItem.innerText
                editInput = document.createElement("input")
                editInput.type = "text"
                editInput.className = "editInput"
                editInput.value = originalValue
                taskContainer.insertBefore(editInput, listItem)
                taskContainer.removeChild(listItem)
                editBtn.innerText = "💾"
                editInput.focus()
                // Optional: handle Enter to save
                editInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') editBtn.click()
                })
            } else {
                // Save mode
                const newVal = (editInput && editInput.value.trim()) || originalValue
                // update array if possible
                const idx = li.indexOf(originalValue)
                if (idx > -1) li[idx] = newVal

                const newListItem = document.createElement("li")
                newListItem.innerText = newVal
                newListItem.className = "tasks"
                taskContainer.insertBefore(newListItem, editInput)
                taskContainer.removeChild(editInput)
                editBtn.innerText = "🖊️"
                // update reference so other handlers still work
                listItem = newListItem
                editInput = null
                originalValue = null
            }
        })
//end
}


