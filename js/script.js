function randomNumber0to12() {
    let number = Math.floor((Math.random())*12);
    return number;
}

function getEightBallAnswer() {
    let randomNumber = randomNumber0to12();
    let answer;

    switch (randomNumber) {
        case 0:
            answer = 'Most likely';
            break;
        case 1:
            answer = 'Outlook good';
            break;
        case 2:
            answer = 'Yes';
            break;
        case 3:
        answer = 'My sources say no';
            break;
            case 4:
        answer = 'Cannot predict now';
            break;
            case 5:
        answer = 'You may rely on it';
            break;
            case 6:
        answer = 'Signs Point to Yes';
            break;
            case 7:
        answer = 'It is certain';
            break;
            case 8:
        answer = 'Very doubtful';
            break;
            case 9:
        answer = 'Ask Again Later';
            break;
            case 10:
        answer = 'Without a doubt';
            break;
            case 11:
        answer = 'My reply is no';
            break;
            case 12:
        answer = 'Better not tell you now';
            break;
    }

    let answerBox = document.getElementById('answer-box');
    answerBox.innerHTML = '<p>' + answer + '</p>';
}