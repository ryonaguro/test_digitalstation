let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('submit').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = '1から100までの数を入力してください。';
    } else if (userGuess < randomNumber) {
        message.textContent = 'もっと大きい数です。';
    } else if (userGuess > randomNumber) {
        message.textContent = 'もっと小さい数です。';
    } else {
        message.textContent = '正解です！おめでとうございます！';
    }
});
