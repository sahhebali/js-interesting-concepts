
function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}

function greetMorning(name) {
    console.log('Good morning', name);
}

welcomeMessage('Tom Hanks', greetMorning);

