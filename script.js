

const now = new Date()
const date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() 

const inputs = [
    // {
    //     title: task ="unknown",
    //     date: "15/5/2025",
    //     isDone : false
    // },
    //  {
    //     title: "aldin",
    //     date: "15/5/2025",
    //     isDone : false
    // },
    //  {
    //     title: "osama",
    //     date: "15/5/2025",
    //     isDone : false
    // }
]




// DONE
function showTasks(){
    document.getElementById("lines").innerHTML =" " 
let index =0
for (const input of inputs){
    console.log(input);
document.getElementById("lines").innerHTML += 
            `<div class="line">
                <div class="left-btns">
                    <button>🖋️</button>
                    <button>✅</button>
                    <button onclick= "deleteTask(${index})">🗑️</button>
                </div>
                <div class="right-text">
                    <h4 id="taskName">${input.title}</h4>
                    <p id="date">${input.date}</p>
                </div>
            </div>`
            index++
            
}
}
showTasks()



const addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click",() =>{
const task = prompt("Enter your task")
const opj ={
        title: task,
        date: date,
        isDone : false
    }
inputs.push(opj)

showTasks()
})



function deleteTask(index){
    inputs.splice(index,1)
    showTasks()
}