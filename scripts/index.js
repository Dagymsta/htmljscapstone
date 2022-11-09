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

const studentInfo = {message: "Logged In",
user: {_id: "5", first_name: "Jackson", last_name: "Dansie", cohort: "3"},
users: [{_id: "1", first_name: "Aiden", last_name:"Smith"},
{_id: "2", first_name: "Amanda", last_name:"Smith"}, 
{_id: "3", first_name: "Brett", last_name:"Wheeler"}
]
}
function toStudentDiv(){
    
    for(user of studentInfo.users){
        const containerDiv= document.createElement("div")
        containerDiv.classList.add("student")

        const studentName= document.createElement("h5")
        studentName.innerText=user.first_name;
        
        const redButton= document.createElement("button")
        redButton.classList.add("red-button")
        redButton.innerText="-"
        
        const greenButton= document.createElement("button")
        greenButton.classList.add("green-button")
        greenButton.innerText="+"
        
        containerDiv.appendChild(studentName)
        containerDiv.appendChild(redButton)
        containerDiv.appendChild(greenButton)
        classRosterContainerDiv.appendChild(containerDiv)       
    }
}

toStudentDiv()