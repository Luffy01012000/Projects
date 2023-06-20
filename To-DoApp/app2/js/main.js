const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.table(itemsArray);
document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item");
  createItem(item);
});

const displayItems = async () => {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">
            <div class="input-controller">
                <textarea disabled>${itemsArray[i]}</textarea>
                <div class="edit-controller">
                    <i class="fa-regular fa-trash-can deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                </div>
            </div>
            <div class="update-controller">
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            </div>
</div>`;
  }
  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListners();
  activateEditListners();
  activateSaveListners();
  activateCancelListners();
};
function activateDeleteListners() {
  let deleteBtn = document.querySelectorAll(".deleteBtn");//select all the query
// console.log(deleteBtn.length);
//   deleteBtn.addEventListener("click",(e)=>{
  //    let p = console.log(e.target.parentElement.parentElement);
//    deleteItem(p);
// })
deleteBtn.forEach((db,i)=>{
    db.addEventListener("click",()=>{
        deleteItem(i)})
})
  
//   for(const db in deleteBtn)  {
//     this.db.addEventListener("click", () => {
//       deleteItem(deleteBtn[db]);
//     });
//   }
}

function deleteItem(i) {
  itemsArray.splice(i, 1); //add and or remove array element it overwrites the original array syntax
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function activateEditListners(){
    const editBtn = document.querySelectorAll(".editBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    editBtn.forEach((eb,i)=>{
        eb.addEventListener("click",()=>{
            updateController[i].style.display="block";
            inputs[i].disabled =false;
        })
    })
}
function activateSaveListners(){
    const saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    // console.log([inputs[1].value])
    saveBtn.forEach((sb,i)=>{
        sb.addEventListener("click",()=>{
            updateItem(inputs[i].value,i);
            
        })
    });
}
const updateItem=(text,i)=>{
    itemsArray[i]=text;
    localStorage.setItem("items",JSON.stringify(itemsArray));
    location.reload();
}
function activateCancelListners(){
    const cancelBtn= document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cb,i)=>{

        cb.addEventListener("click",()=>{
    updateController[i].style.display="none";
            inputs[i].disabled=true;
    });
    })
}

const createItem = (item) => {
  itemsArray.push(item.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
};

const displayDate = () => {
  let date = new Date();
  // console.log(typeof date);
  date = date.toString().split(" ");
  // console.log(typeof date);
  document.querySelector("#date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];
};

const displayTask=()=>{
    let total = document.querySelectorAll(".input-controller");
    // console.log(total.length);
    let task = document.querySelector("#task");
    // task.innerText="To-Do Lists:-"+" "+total.length;
    if(total.length===0){

        task.appendChild(document.createTextNode("No To-Do Lists..! "));
    }else{

        task.appendChild(document.createTextNode("To-Do Lists:-"+" "+total.length));
    }
    // console.log(task);

}
window.onload = async () => {
  displayDate();
  await displayItems();
  displayTask();
};

// >==============================================
//out of project work

/* let btn=document.querySelector("#enter");
    btn.addEventListener("click",()=>{
        
       let data = document.querySelector("#item").value;
       let ndata = data.toString().split(" ");//convert into string then object
       console.log( ndata)
       console.log(typeof ndata)
// ndata=ndata.split(" ");
        // console.log( JSON.stringify(ndata))//again converted that object into an array of string 
        console.log( ndata.toString())//again converted that object into string 
        console.log( typeof JSON.stringify(ndata))//again converted that object into string 
        localStorage.setItem("todos",ndata)
 })
*/

//======================================
/*Convert string into date */
//  let birth = "12-09-2000"; //valid
//mm-dd-yyyy
//  let birth = "2000/09/12";//valid
//  let birth = "20000912";//Invalid
//  let birth = "2000,09.12,22:09";//valid
//  let birth = "2000,09,12,22:09";//valid
//  let birth = "2000.09.12.22:09";//valid
//yyyy-mm-dd
//  birth = new Date(birth);
//  console.log(birth)
