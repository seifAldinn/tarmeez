


let inputs = [
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
    //     isDone : true
    // }
]
 setInLoaclStorage()



// DONE
function showTasks(){
    document.getElementById("lines").innerHTML =" " 
let index =0
for (const input of inputs){
    console.log(input);
document.getElementById("lines").innerHTML += 
            `<div class="line ${input.isDone ? 'done' : ''}" id="${index}">
                <div class="left-btns">
                    <button onclick="editTask(${index})">🖋️</button>
                     ${inputs[index].isDone == false ? `<button id="doneBtn" class="done-btn" onclick = "markAsDone(${index})">✅</button>` :
                      `<button id="doneBtn" class="redo-btn" onclick = "markAsDone(${index})">❌</button>`}


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

    const now = new Date()
    const date = now.getHours() + ":" + now.getMinutes() + " | " + now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() 


    let task


    do{
         task = prompt("Enter your task")
    }while(task === "" ||task === null)

const opj ={
        title: task,
        date: date,
        isDone : false
    }
inputs.push(opj);
getFromLoacalStorage();
showTasks();
})



function deleteTask(index){
    inputs.splice(index,1)
    getFromLoacalStorage()
    showTasks()
}



function editTask(index){
    let newTiltle
 do{
        newTiltle = prompt("enter new title for" ,inputs[index].title)
    }while(newTiltle === "" ||newTiltle === null)


inputs[index].title = newTiltle
    getFromLoacalStorage()
    showTasks()

}

function markAsDone(index){
    let lineID = document.getElementById(index)
    let doneBtn = document.getElementById("doneBtn")
   if(inputs[index].isDone){
        inputs[index].isDone = false
        lineID.classList.remove("done")
        doneBtn.classList.add("redo-btn")

   }else if(!inputs[index].isDone){
        inputs[index].isDone = true
           lineID.classList.add("done")
           doneBtn.classList.remove("redo-btn")

   }
    getFromLoacalStorage()
    showTasks()  
// console.log(lineID)
}




// ****================localStorage==================****

function setInLoaclStorage(){
    let localData = JSON.parse(localStorage.getItem("task"))
if(localData !== null){
    inputs = localData 
}}

function getFromLoacalStorage(){
    localStorage.setItem("task", JSON.stringify(inputs));

}