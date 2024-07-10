const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');

choices.forEach(choice => choice.addEventListener('click', (e) => {
    const userChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice();
    const outcome = getOutcome(userChoice, computerChoice);

    userChoiceDisplay.textContent = `あなたの選択: ${userChoice}`;
    computerChoiceDisplay.textContent = `コンピューターの選択: ${computerChoice}`;
    outcomeDisplay.textContent = `結果: ${outcome}`;
}));

function getComputerChoice() {
    const choices = ['グー', 'チョキ', 'パー'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return '引き分け';
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        return '勝ち';
    } else {
        return '負け';
    }
}
