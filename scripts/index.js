
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
        weight.setAttribute("id",`weight-${user._id}`)
        weight.innerText = 1;
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
    if (currentWeight > 0 || crement == 1) {
      console.log(currentWeight + crement);
      weight.innerHTML = currentWeight + crement;
    }
  }

function addStudent(fn) {
  startingArray.push(fn);
  console.log(startingArray);
}

function minusStudent(fn) {
  const indexOfFn = (element) => element === fn;
  const q = startingArray.findIndex(indexOfFn);
  if (startingArray.includes(fn)) {
    startingArray.splice(q, 1);
  }
  console.log(fn);
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

  if(startingArray.length == 0){
    for(user of studentInfo.users){
      const id= user._id
      const first_name= user.first_name
      let currentWeight= document.getElementById(`weight-${id}`)
      console.log(currentWeight)
      let i = Number(currentWeight.innerText)
      for(i>0; i--;){
        startingArray.push(first_name)
      }
    }
  }
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


