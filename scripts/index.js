/* 
TODO:
render a list of students to the browser
 - fetch / use mock students 
 - loop data
    - create a container div
      - add attributes (class, etc)
    - create text from formatted name
    - create text for weight
    - create plus / minus buttons
      - add event listeners to buttons
    - stitch all elements
    - append container div to sidebar
random selection
refactor
*/
const classRosterContainer = document.getElementsByClassName("class-roster-container");
const classRosterContainerDiv = classRosterContainer.item(0)

const rightContainer = document.getElementsByClassName("right-page-display");
const rightContainerDiv = rightContainer.item(0);
const studentInfo = {message: "Logged In",
user: {_id: "5", first_name: "Jackson", last_name: "Dansie", cohort: "3"},
users: [{_id: "1", first_name: "Aiden", last_name:"Smith"},
{_id: "2", first_name: "Amanda", last_name:"Smith"}, 
{_id: "3", first_name: "Brett", last_name:"Wheeler"}
]
}

let startingArray=[]

function toStudentDiv(){
    
    for(user of studentInfo.users){
        const fn = user.first_name
        startingArray.push(user.first_name)
        const containerDiv= document.createElement("div")
        containerDiv.classList.add("student")
        containerDiv.setAttribute("id",user.first_name)

        const studentName= document.createTextNode(`${user.first_name}`)
        studentName.innerText=user.first_name;
        const weight = document.createElement("span");
        weight.classList.add("weight");
        weight.innerText = 0;
        const newLine=document.createElement("br")
        
        const redButton= document.createElement("button")
        redButton.classList.add("red-button")
        redButton.innerText="-"
        
        const greenButton= document.createElement("button")
        greenButton.classList.add("green-button")
        greenButton.innerText="+"
        
        containerDiv.appendChild(studentName)
        containerDiv.appendChild(weight)
        containerDiv.appendChild(newLine)
        containerDiv.appendChild(redButton)
        containerDiv.appendChild(greenButton)
        greenButton.addEventListener("click", (e) => handleAddWeight(greenButton, 1));
        redButton.addEventListener("click", (e) =>
        handleAddWeight(redButton, -1)
        );
        greenButton.addEventListener("click", (e) => addStudent(fn));
        redButton.addEventListener("click", (e) => minusStudent(fn));
        classRosterContainerDiv.appendChild(containerDiv)       
    }
}

function handleAddWeight(plusWeight, crement) {
  const parentDiv = plusWeight.parentElement;
  const weight = parentDiv.children[0];
  const currentWeight = Number(weight.textContent);
  console.log(currentWeight + crement);
  weight.innerHTML = currentWeight + crement;
}

function addStudent(fn) {
  startingArray.push(fn);
  console.log(startingArray);
}

function minusStudent(fn) {
  const indexOfFn = (element) => element === fn;
  const q = startingArray.findIndex(indexOfFn);
  startingArray.splice(q, 1);
  console.log(startingArray);
}

function createStudentPicker() {
  const randomStudentBtn = document.createElement("button");
  randomStudentBtn.classList.add("random-student-btn");
  randomStudentBtn.innerText = "Whose it gonna be?";
  rightContainerDiv.appendChild(randomStudentBtn);
  randomStudentBtn.addEventListener("click", (e) => pickerButton());
}

const headerWrapper = document.getElementsByClassName("header-wrapper-2");
const headerWrapperDiv = headerWrapper.item(0);


function luckyDay(){
  const h1=document.createElement("h1")
  h1.setAttribute("id","lucky-header")
  h1.innerText="It's your lucky day:"
  headerWrapperDiv.appendChild(h1)
}
luckyDay()

createStudentPicker();

function pickerButton() {
  min = 0;
  max = startingArray.length - 1;
  const y = Math.floor(Math.random() * (max - min + 1) + min);
  const luckyDog=startingArray.splice(y, 1);
  console.log(startingArray);
  const h1=document.getElementById("lucky-header")
  h1.innerText=luckyDog
  headerWrapperDiv.appendChild(h1)
}


toStudentDiv()