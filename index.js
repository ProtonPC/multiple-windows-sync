// criar evento
// chamar o evento
// ao chamar o evento a pagina tem que trocar de cor
const channel = new BroadcastChannel('myChannel');

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

// Send a message to other tabs
function sendMessageToOtherTabs(color) {
    channel.postMessage(color);
}


window.onload = function(){
    // Listen for messages from other tabs
    channel.addEventListener('message', function(event) {
        const color = event.data;
        console.log('Received color:', color);
        changeBackground(color)
    });
    //
    document.getElementById("btn").addEventListener("click", function(){
        let flag = localStorage.getItem("flag") || '1';
        let color = (flag == '1') ? "green" : "red";
        sendMessageToOtherTabs(color);
        changeBackground(color)
        localStorage.setItem("flag", (flag == '1') ? '0' : '1')
    });
}

//

