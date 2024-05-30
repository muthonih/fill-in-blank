function validateAnswers() {
    const answers = {
        q1: 'A piece of skin',
        q2: 'flexible stick',
        q3: 'Neck',
        q4: 'Resonator',
        q5: 'the skin membrane'
    };

    let score = 0;
    const form = document.getElementById('fillInForm');
    const resultElement = document.getElementById('result');

    for (let key in answers) {
        const questionElement = document.getElementById(key);
        const selectedOption = form.querySelector(`input[name="${key}"]:checked`);
        
        if (selectedOption) {
            if (selectedOption.value === answers[key]) {
                score++;
                questionElement.classList.remove('incorrect');
                questionElement.classList.add('correct');
            } else {
                questionElement.classList.remove('correct');
                questionElement.classList.add('incorrect');
            }
        } else {
            questionElement.classList.remove('correct');
            questionElement.classList.add('incorrect');
        }
    }

    if (score === Object.keys(answers).length) {
        resultElement.textContent = `Congratulations! You got all answers correct.`;
    } else {
        resultElement.textContent = `You got ${score} out of ${Object.keys(answers).length} correct. Try again!`;
    }
}

function resetForm() {
    const form = document.getElementById('fillInForm');
    form.reset();
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    const questions = form.querySelectorAll('.question');
    questions.forEach(question => {
        question.classList.remove('correct', 'incorrect');
    });
}
