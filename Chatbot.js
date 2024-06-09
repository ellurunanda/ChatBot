let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContEle = document.getElementById("chatContainer");
let usrInp = document.getElementById("userInput");
let sendBtn = document.getElementById("sendMsgBtn");

let msgInd = 0;

function replyFromChatBot() {
    let msgContEle = document.createElement("div");
    msgContEle.classList.add("msg-from-chatbot-container");

    let spanMsg = document.createElement("span");
    spanMsg.classList.add("msg-from-chatbot");
    spanMsg.textContent = chatbotMsgList[msgInd++];
    msgContEle.appendChild(spanMsg);
    chatContEle.appendChild(msgContEle);
}

sendBtn.onclick = function() {
    let usrmsg = usrInp.value;
    let msgContEle = document.createElement("div");
    msgContEle.classList.add("msg-to-chatbot-container");

    let spanMsg = document.createElement("span");
    spanMsg.classList.add("msg-to-chatbot");
    spanMsg.textContent = usrmsg;
    msgContEle.appendChild(spanMsg);
    chatContEle.appendChild(msgContEle);
    usrInp.value = "";
    replyFromChatBot();

};