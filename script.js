const messages = document.getElementById("messages");
const input = document.getElementById("userInput");


function sendMessage() {
const text = input.value.trim();
if (text === "") return;


addMessage(text, "user");
input.value = "";


setTimeout(() => {
botReply(text);
}, 600);
}


function addMessage(text, sender) {
const div = document.createElement("div");
div.className = `msg ${sender}`;
div.innerText = text;
messages.appendChild(div);
messages.scrollTop = messages.scrollHeight;
}


function botReply(userText) {
let reply = "I didn't understand 🤔";


userText = userText.toLowerCase();


if (userText.includes("hello") || userText.includes("hi")) {
reply = "Hello! How can I help you?";
} else if (userText.includes("name")) {
reply = "I'm a  chatbot.";
} else if (userText.includes("bye")) {
reply = "Goodbye! Have a nice day 👋";
} else if (userText.includes("music")) {
reply = "I love music 🎵 What's your favorite song?";
}


addMessage(reply, "bot");
}


input.addEventListener("keypress", function(e) {
if (e.key === "Enter") sendMessage();
});