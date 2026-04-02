const score = localStorage.getItem("score");
const userAnswers = JSON.parse(localStorage.getItem("answers"));
const questions = JSON.parse(localStorage.getItem("questions"));

const explanations = [
"Mediawijs betekent dat je bewust en kritisch omgaat met wat je online ziet en doet.",
"Tegenwoordig delen mensen sneller informatie via sociale media.",
"Een foto kan zich snel verspreiden zonder jouw controle.",
"Mediawijs gedrag betekent eerst nadenken voordat je iets deelt.",
"Online berichten en foto's kunnen zich snel verspreiden.",
"Niet alles wat je online ziet is waar.",
"Privéberichten kunnen doorgestuurd worden.",
"Sommige links kunnen virussen bevatten.",
"Wat je online zet blijft vaak bestaan.",
"Mediawijs betekent nadenken over veiligheid en gevolgen."
];

setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerText = score + " / 10";

    let html = "";

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const user = userAnswers[i];
        const correct = q.c;
        const goed = user === correct;

        html += `

<br><br>

        <div style="margin-top:20px;">
            <h1 style="color:${goed ? 'green' : 'red'}; font-weight:bold; font-size:16px;">
                ${goed ? '✔ Goed' : '❌ Fout'}
            </h1>
            <h1><strong>Vraag ${i+1}:</strong> ${q.q}</h1>
        
<br>

            <p><b>Jouw antwoord:</b> ${q.a[user]}</p>
            <p><b>Correct antwoord:</b> ${q.a[correct]}</p>

<br>

            <h3><em><strong>UITLEG: ${explanations[i]}</strong></em></h3>
        </div>
        `;
    }

    document.getElementById("review").innerHTML = html;

}, 3000);