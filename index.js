

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
    let listItem=document.createElement("li")
    listItem.innerText=inputValue
    listItem.className="tasks"
    let deleteBtn=document.createElement("button")
    deleteBtn.innerText="🗑️"
    deleteBtn.className="btns"
    deleteBtn.id="delete"
    list.appendChild(listItem)
    list.appendChild(deleteBtn)
    deleteBtn.addEventListener("click",()=>{
        const inputValue=task.value
        if(inputValue.trim()!==""){
            li.splice(li.indexOf(inputValue),1)
        }
        list.removeChild(listItem)
        list.removeChild(deleteBtn)
        list.removeChild(completed)
    })
    let completed=document.createElement("button")
    completed.className="btns"
    completed.id="complete"
    completed.innerText="✅"
    list.appendChild(completed)
    completed.addEventListener("click",()=>{
        if(inputValue.trim()!==""){
            li.splice(li.indexOf(inputValue),1)
        }
        listItem.style.textDecoration="line-through"
    })

}


