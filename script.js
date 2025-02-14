const messages = [
    "Tui ki sure?",
    "Sotti sure??",
    "Are you positive?",
    "Pookie please...",
    "Just ekbar vebe dekh!",
    "Jodi tui naa bolis, Tahole khub kharap pabo...",
    "Ami sotti kharap Pabo...",
    "Ami sotti khub khub kharap pabo...",
    "Accha thikach ar jiggasa korbo na...",
    "Are mojak korchilam, please yes bole de! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}