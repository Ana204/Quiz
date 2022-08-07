let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//event
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

function showQuestion(){

    if(questions[currentQuestion]){

        let question = questions[currentQuestion];

        let porcentagem = (currentQuestion / questions.length) * 100;
        document.querySelector('.progress--bar').style.width = `${porcentagem}%`

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = question.question

        let optionsHtml = '';
        for(let i in question.options){
            optionsHtml += `<div data-op="${i}" class="option"> <span>${parseInt(i)+1}</span> ${question.options[i]}</div>`;
        }

        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })

    }else{
        finishQuiz();
    }
}

function optionClickEvent(e){

    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer === clickedOption) {

        correctAnswers++;
    }

    currentQuestion++
    showQuestion();

}

function finishQuiz(){

    let points = (correctAnswers / questions.length) * 100;

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers} `

    if(points < 30){
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim em?!';
        document.querySelector('.scorePct').style.color = '#FF0000'
    }
    else if(points >= 30 && points < 70){
        document.querySelector('.scoreText1').innerHTML = 'Muito bom!';
        document.querySelector('.scorePct').style.color = '#FFFF00'  
    }
    else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = 'Parabéns !!';
        document.querySelector('.scorePct').style.color = '#0D630D'  
    }

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';


}

function resetEvent(){
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}
