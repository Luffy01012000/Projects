/*
Need to add select
+
×
Also need to add select all
+
×
Delete all
+
Due Date
×
+
upcoming event
+
*/ 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const AddTask = () => {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    /*
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    */

    //------------------------------------
    //creating a input instead of li so that we can edit directly from our input area
let content = document.createElement("div")
content.classList.add("content");
// console.log(JSON.stringify(inputBox.value)); 
console.log(typeof inputBox.value); 
// content.innerText = inputBox.value;
console.log(content.innerHTML); 
listContainer.appendChild(content);
let input = document.createElement("input");
input.type="text";
input.classList.add("text");
input.value = inputBox.value;
input.setAttribute("readonly","readonly");
content.appendChild(input);
//>-----------------------------------------------------
        // let span1 = document.createElement("aside");
        /*
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        */
       let span1 = document.createElement("span");
       let span2 = document.createElement("span");
        span1.innerText = "\u00d7";
        span2.innerText = "\u002b";
        span1.classList.add("delete");
        span2.classList.add("edit");
        /*
        li.appendChild(span1);
        li.appendChild(span2);
        */
        content.appendChild(span2);
        content.appendChild(span1);
    
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.className === "content") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }else if (e.target.className.toLowerCase() === "edit") {
        // if (inputBox.value === "") {
        //     alert("you must write something");
        // }else{
        if(e.target.innerText.toLowerCase() ==="\u002b"){
            e.target.previousElementSibling.removeAttribute("readonly");
            e.target.previousElementSibling.focus();
            e.target.innerText="\u2713";
            let i = e.target.previousElementSibling;
            // i.innerText=inputBox.value;
            i=i.value;
            
            // let span1 = document.createElement("span");
            // let span2 = document.createElement("span");
            // span1.innerText = "\u00d7";
            // span2.innerText = "\u002b";
            // span1.classList.add("delete");
            // span2.classList.add("edit");
            // i.appendChild(span1);
            // i.appendChild(span2);
            
            
            saveData()
            // inputBox.value = "";
            //  console.log(i);
        // }
        }
    }else{
      // let i = e.target;
      e.target.setAttribute("readonly","readonly");
      console.log(e.target.nextElementSibling);
      // e.target.nextElementSibling.focus();
      console.log(e.target.nextElementSibling);
      e.target.nextElementSibling.innerText="\u002b";
      // console.log(i)
      // e.target.focus();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};



showTask();
