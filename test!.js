//Make javascript strict cause why not
'use strict';

// Store the first names of the candidate's submitted in an array
let candidateNames = new Array(10);
// Store the last names of the candidate's submitted in an array 
let candidateLastNames = new Array(10);
// Store the grades of the candidate's submitted in an array
let candidateGrades = new Array(10);
// Store the positions of the candidate's submitted in an array
let candidatePositions = new Array(10);
// Store the messages of the candidate's submitted in an array
let candidateMessages = new Array(10);
// Store the image links of the candidate's submitted in an array
let candidateImageLinks = new Array(10);
//Store the candidate number as a global variable 
let candidateCounter = 0;
//Store the current index as a global variable 
let currentIndex = 0; 

// Constants for accessing HTML elements
const INPUTTING_CANDIDATES_FIRSTNAMES = document.getElementById('firstName');
const INPUTTING_CANDIDATES_LASTNAMES = document.getElementById('lastName');
const INPUTTING_CANDIDATES_GRADE = document.getElementById('grade');
const INPUTTING_CANDIDATES_POSITION = document.getElementById('candidatesPosition');
const INPUTTING_CANDIDATES_MESSAGE = document.getElementById('message');
const INPUTTING_CANDIDATES_IMAGE = document.getElementById('image');
const P_CURRENT_CANDIDATE = document.getElementById('displayCandidateInformation');

//Display a function for when the webpage loads
function webpageLoading(){
    document.getElementById('votingPageButton').hidden = true; 


}

// Display a function in which it stores the inputted information from the user 
function submitCandidate() {
    candidateNames[candidateCounter] = INPUTTING_CANDIDATES_FIRSTNAMES.value; 
    candidateLastNames[candidateCounter] = INPUTTING_CANDIDATES_LASTNAMES.value;
    candidateGrades[candidateCounter] = INPUTTING_CANDIDATES_GRADE.value;
    candidatePositions[candidateCounter] = INPUTTING_CANDIDATES_POSITION.value;
    candidateMessages[candidateCounter] = INPUTTING_CANDIDATES_MESSAGE.value;
    candidateImageLinks[candidateCounter] = INPUTTING_CANDIDATES_IMAGE.value;

    if(candidateCounter < 10){
        if(INPUTTING_CANDIDATES_FIRSTNAMES.value.substring(0 , 1) !== '' && INPUTTING_CANDIDATES_LASTNAMES.value.substring(0 , 1) !== '' &&  INPUTTING_CANDIDATES_GRADE.value.substring(0 , 1) !== '' && INPUTTING_CANDIDATES_POSITION.value.substring(0 , 1) !== '' ){
                
            if(INPUTTING_CANDIDATES_GRADE.value >= 9 && INPUTTING_CANDIDATES_GRADE.value <= 12){
                candidateCounter ++; 
                
                INPUTTING_CANDIDATES_FIRSTNAMES.value = '';
                INPUTTING_CANDIDATES_LASTNAMES.value = '';
                INPUTTING_CANDIDATES_GRADE.value = '';
                INPUTTING_CANDIDATES_POSITION.value = '';
                INPUTTING_CANDIDATES_MESSAGE.value = '';
                INPUTTING_CANDIDATES_IMAGE.value = '';
            }
            else{
                alert('Grade is not a valid number!');
                candidateNames[candidateCounter] = INPUTTING_CANDIDATES_FIRSTNAMES.value = ''; 
                candidateLastNames[candidateCounter] = INPUTTING_CANDIDATES_LASTNAMES.value = '';
                candidateGrades[candidateCounter] = INPUTTING_CANDIDATES_GRADE.value = '';
                candidatePositions[candidateCounter] = INPUTTING_CANDIDATES_POSITION.value = '';
                candidateMessages[candidateCounter] = INPUTTING_CANDIDATES_MESSAGE.value = '';
                candidateImageLinks[candidateCounter] = INPUTTING_CANDIDATES_IMAGE.value = '';
            }
        }
        else{
            candidateNames[candidateCounter] = INPUTTING_CANDIDATES_FIRSTNAMES.value = ''; 
            candidateLastNames[candidateCounter] = INPUTTING_CANDIDATES_LASTNAMES.value = '';
            candidateGrades[candidateCounter] = INPUTTING_CANDIDATES_GRADE.value = '';
            candidatePositions[candidateCounter] = INPUTTING_CANDIDATES_POSITION.value = '';
            candidateMessages[candidateCounter] = INPUTTING_CANDIDATES_MESSAGE.value = '';
            candidateImageLinks[candidateCounter] = INPUTTING_CANDIDATES_IMAGE.value = '';
            
            INPUTTING_CANDIDATES_FIRSTNAMES.value = '';
            INPUTTING_CANDIDATES_LASTNAMES.value = '';
            INPUTTING_CANDIDATES_GRADE.value = '';
            INPUTTING_CANDIDATES_POSITION.value = '';
            INPUTTING_CANDIDATES_MESSAGE.value = '';
            INPUTTING_CANDIDATES_IMAGE.value = '';

            alert('You have to fill all of the information. Try again!');
        }
    }
    if(candidateCounter===10){
        alert('Maximum Candidates Reached!'); 
        document.getElementById('votingPageButton').hidden = false; 
    }
    
    

        
}
//A function for the user to change and alter information for a selected candidate
function editCandidate() {
    if (currentIndex >= 0 && currentIndex < candidateCounter) {
        INPUTTING_CANDIDATES_FIRSTNAMES.value = candidateNames[currentIndex];
        INPUTTING_CANDIDATES_LASTNAMES.value = candidateLastNames[currentIndex];
        INPUTTING_CANDIDATES_GRADE.value = candidateGrades[currentIndex];
        INPUTTING_CANDIDATES_POSITION.value = candidatePositions[currentIndex];
        INPUTTING_CANDIDATES_MESSAGE.value = candidateMessages[currentIndex];
        INPUTTING_CANDIDATES_IMAGE.value = candidateImageLinks[currentIndex];

        enableInputFields();
    } else {
        alert('No candidate to edit.');
    }
}

//Function for saving an edit of a previously written down candidate
function saveEdit() {
    if (currentIndex >= 0 && currentIndex < candidateCounter) {
        candidateNames[currentIndex] = INPUTTING_CANDIDATES_FIRSTNAMES.value;
        candidateLastNames[currentIndex] = INPUTTING_CANDIDATES_LASTNAMES.value;
        candidateGrades[currentIndex] = INPUTTING_CANDIDATES_GRADE.value;
        candidatePositions[currentIndex] = INPUTTING_CANDIDATES_POSITION.value;
        candidateMessages[currentIndex] = INPUTTING_CANDIDATES_MESSAGE.value;
        candidateImageLinks[currentIndex] = INPUTTING_CANDIDATES_IMAGE.value;

        disableInputFields();

        alert('Candidate information updated successfully.');
    } 
    else {
        alert('No candidate to edit.');

    }
}

// Function to disable the textboxes to the user
function disableInputFields() {
    INPUTTING_CANDIDATES_FIRSTNAMES.disabled = true;
    INPUTTING_CANDIDATES_LASTNAMES.disabled = true;
    INPUTTING_CANDIDATES_GRADE.disabled = true;
    INPUTTING_CANDIDATES_POSITION.disabled = true;
    INPUTTING_CANDIDATES_MESSAGE.disabled = true;
    INPUTTING_CANDIDATES_IMAGE.disabled = true;
    timerFunction();
}
//Display a function in which it makes a timer for the textboxes to be available after a set period of time
function timerFunction(){
    let timer = setInterval(enableInputFields(),2000);
    
}
// Function to enable the textboxes to the user 
function enableInputFields() {
    INPUTTING_CANDIDATES_FIRSTNAMES.disabled = false;
    INPUTTING_CANDIDATES_LASTNAMES.disabled = false;
    INPUTTING_CANDIDATES_GRADE.disabled = false;
    INPUTTING_CANDIDATES_POSITION.disabled = false;
    INPUTTING_CANDIDATES_MESSAGE.disabled = false;
    INPUTTING_CANDIDATES_IMAGE.disabled = false;
}

//Display a function in which it permits the user to head backwards from a selected candidate
function goBack(){
    currentIndex--;
    if (currentIndex <0){
        currentIndex =0; 
    }
    printCurrentCandidate();
}
//Display a function in which it permits the user to go forwards from a selected candidate
function goForward(){
    currentIndex = currentIndex + 1;
    if(currentIndex>=candidateCounter){
        currentIndex = candidateCounter -1;
    }
    printCurrentCandidate();
}

//Display a function in which it shows the user's input back using the P_CURRENT_CANDIDATE constant
function printCurrentCandidate(){
    P_CURRENT_CANDIDATE.innerText = 'Current Made Candidate: ' + '\n' + candidateNames[currentIndex] + ' ' + candidateLastNames[currentIndex] + '\n' + 'Grade: ' + candidateGrades[currentIndex] + '\n' + 'Position: ' + candidatePositions[currentIndex] + '\n' + 'Their Message: ' + candidateMessages[currentIndex] + '\n' + 'Image: ' + candidateImageLinks[currentIndex];  
}

//Display a function in which the user is taken to the voting page
function displayVotingPage(){

}


    

 