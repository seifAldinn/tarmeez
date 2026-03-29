


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
    const statusBtn = input.isDone
        ? `<button class="redo-btn" onclick="markAsDone(${index})"><i class="fa-solid fa-rotate-left"></i></button>`
        : `<button class="done-btn" onclick="markAsDone(${index})"><i class="fa-solid fa-check"></i></button>`;
    document.getElementById("lines").innerHTML += 
            `<div class="line ${input.isDone ? 'done' : ''}" id="${index}">
                <div class="left-btns">
                    <button class="edit-btn" onclick="editTask(${index})"><i class="fa-solid fa-pen"></i></button>
                    ${statusBtn}
                    <button class="del-btn" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button>
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
    inputs[index].isDone = !inputs[index].isDone
    getFromLoacalStorage()
    showTasks()
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