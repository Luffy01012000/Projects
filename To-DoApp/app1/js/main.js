const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


const AddTask = ()=>{
    if(inputBox.value === ""){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let spann = document.createElement("span");
        spann.innerHTML= "\u00d7";
        li.appendChild(spann);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",(e)=>{
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();
}
},false);


const saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);

}

const showTask=()=>{
   listContainer.innerHTML= localStorage.getItem("data");
}

showTask();

