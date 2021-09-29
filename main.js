const html_elements={
    question_header:document.querySelector('.question'),
    options_container:document.getElementById("options-container"),
    proceed_button:document.querySelector('.foward-button'),
    back_button:document.querySelector('.back-button'),
    create_answers(option_num,option_string,option_value){
        return `<br><br>
        <input type="radio" name="option" id="option-${option_num}" value="${option_value}">
        <label for="option-${option_num}"> ${option_string}</label>`
    }
}
const questions=[
    {
        question:"Which Browser is no longer supported by microsoft",
        possible_answers:["IE","Chrome","Firefox","UC Browser","Torch"],
    },
    {
        question:"Free Way To Check If Feature Is Supported On All Browsers",
        possible_answers:["CanIUse","Browser Stack","Dribble"]
    },
    {
        question:"Premium Way To Check If Feature Is Supported On All Browsers",
        possible_answers:["CanIUse","Browser Stack","Dribble"]
    },
    {
        question:"A Place To Find Design Inspiration",
        possible_answers:["CanIUse","Browser Stack","Dribble"]
    },
    {
        question:"A System Used For Version Control",
        possible_answers:["CanIUse","GitHub","Browser Stack","Gist","Git"]
    }
]
const answers=[
    questions[0]['possible_answers'][0],
    questions[1]['possible_answers'][0],
    questions[2]['possible_answers'][1],
    questions[3]['possible_answers'][2],
    questions[4]['possible_answers'][4]
];
let currAnswer="";
/* FOR TRACKING THE QUESTION WE ARE IN ---> THIS INDEX WILL ALSO BE USED FOR THE BACK OPTION AND FOWARD OPTION */
let question_index=0;
/* will need to check if there is something at the current question  
if there is someting it means that the question has already been answered (take the answer from the answers history)
else the question has not been answered */
const answers_history=[];

function loadQuiz(){
    const currQuestion=questions[question_index];
    html_elements.options_container.textContent="";
    html_elements.question_header.textContent=currQuestion.question+" ?";
    currQuestion.possible_answers.forEach((answer,i)=>{
        html_elements.options_container.insertAdjacentHTML("beforeend",html_elements.create_answers(i,answer,answer))
    }) ;
    const options = document.querySelectorAll('input[type=radio]').forEach(el=>el.addEventListener('click',function (){
        currAnswer=this.value;
    })); 
}
function getFinalAnswer(){
    const point=currAnswer===answers[question_index]?1:0;
    answers_history[question_index]={
        answer:currAnswer
    }
}
loadQuiz()
html_elements.back_button.addEventListener('click',()=>{
    /* go to the previously answered question */
    question_index--;
    loadQuiz();
})
html_elements.proceed_button.addEventListener('click',()=>{
    /* go to the previously answered question */
    question_index++;
    loadQuiz();
})
