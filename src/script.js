let currentQuestion = 0;

showQuestion();

function showQuestion(){

    if(questions[currentQuestion]){

        let question = questions[currentQuestion];
        console.log(question.question)

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
    }
}

function optionClickEvent(e){
    console.log("Clicou em ", e.target.getAttribute('data-op'))
}
