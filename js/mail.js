function sendMail(){
    emailjs.send("service_b74igue","template_qfqukal",{
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        replyto: document.getElementById("replyto").value,
        sendername: document.getElementById("sendername").value,
        }).then(alert("Email Has been sented!!"));
}