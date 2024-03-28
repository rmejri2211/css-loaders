function calculateScore() {
    var score = 0;
    var totalQuestions = 18;

    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');
    var q4Answer = document.querySelector('input[name="q4"]:checked');
    var q5Answer = document.querySelector('input[name="q5"]:checked');
    var q6Answer = document.querySelector('input[name="q6"]:checked');
    var q7Answer = document.querySelector('input[name="q7"]:checked');
    var q8Answer = document.querySelector('input[name="q8"]:checked');
    var q9Answer = document.querySelector('input[name="q9"]:checked');
    var q10Answer = document.querySelector('input[name="q10"]:checked');
    var q11Answer = document.querySelector('input[name="q11"]:checked');
    var q12Answer = document.querySelector('input[name="q12"]:checked');
    var q13Answer = document.querySelector('input[name="q13"]:checked');
    var q14Answer = document.querySelector('input[name="q14"]:checked');
    var q15Answer = document.querySelector('input[name="q15"]:checked');
    var q16Answer = document.querySelector('input[name="q16"]:checked');
    var q17Answer = document.querySelector('input[name="q17"]:checked');
    var q18Answer = document.querySelector('input[name="q18"]:checked');
    

    if (!q1Answer || !q2Answer || !q3Answer || !q4Answer || !q5Answer || !q6Answer || !q7Answer || !q8Answer || !q9Answer || !q10Answer || !q11Answer || !q12Answer || !q13Answer || !q14Answer || !q15Answer || !q16Answer || !q17Answer || !q18Answer ) {
        alert("Veuillez repondre a toutes les questions avant de soumettre.");
        return;
    }

    var q1Value = q1Answer.value.trim();
    var q2Value = q2Answer.value.trim();
    var q3Value = q3Answer.value.trim();
    var q4Value = q4Answer.value.trim();
    var q5Value = q5Answer.value.trim();
    var q6Value = q6Answer.value.trim();
    var q7Value = q7Answer.value.trim();
    var q8Value = q8Answer.value.trim();
    var q9Value = q9Answer.value.trim();
    var q10Value = q10Answer.value.trim();
    var q11Value = q11Answer.value.trim();
    var q12Value = q12Answer.value.trim();
    var q13Value = q13Answer.value.trim();
    var q14Value = q14Answer.value.trim();
    var q15Value = q15Answer.value.trim();
    var q16Value = q16Answer.value.trim();
    var q17Value = q17Answer.value.trim();
    var q18Value = q18Answer.value.trim();

    if (q1Value === "JavaScript") { score++; }
    if (q2Value === "FTP") { score++; }
    if (q3Value === "Structured Query Language") { score++; }
    if (q4Value === "macOS") { score++; }
    if (q5Value === "Kotlin") { score++; }
    if (q6Value === "HTML") { score++; }
    if (q7Value === "Git") { score++; }
    if (q8Value === "HTTPS") { score++; }
    if (q9Value === "Python") { score++; }
    if (q10Value === "C++") { score++; }
    if (q11Value === "HDD") { score++; }
    if (q12Value === "PHP") { score++; }
    if (q13Value === "Contrôler le trafic réseau") { score++; }
    if (q14Value === "Conception") { score++; }
    if (q15Value === "Convertir les noms de domaine en adresses IP") { score++; }
    if (q16Value === "JavaScript") { score++; }
    if (q17Value === "faux") { score++; }
    if (q18Value === "vrai") { score++; }
   

    var result = document.getElementById('result');
    result.innerHTML = "Votre score est " + score + " sur " + totalQuestions;
}
function displayScore() {
    scoreElement.textContent = Votre score est : ${score} / ${questions.length};
}