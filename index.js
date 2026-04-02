
    const vragen = [
      {
        vraag: "Wat is fake nieuws?",
        antwoorden: [
          "Echt nieuws",
          "Misleidende informatie",
          "Nieuws op tv",
          "Nieuws met foto's"
        ],
        correct: [1]
      },
      {
        vraag: "Waarom maken mensen fake nieuws?",
        antwoorden: [
          "Voor geld",
          "Om te misleiden",
          "Voor aandacht",
          "Geen reden"
        ],
        correct: [0,1,2]
      },
      {
        vraag: "Welke bron is betrouwbaarder?",
        antwoorden: [
          "Random blog",
          "Bekende nieuwswebsite",
          "Anonieme post",
          "Onbekende pagina"
        ],
        correct: [1]
      },
      {
        vraag: "Wat moet je doen bij twijfel?",
        antwoorden: [
          "Geloven",
          "Delen",
          "Controleren",
          "Negeren"
        ],
        correct: [2]
      },
      {
        vraag: "Kenmerk van fake nieuws?",
        antwoorden: [
          "Hoofdletters",
          "Clickbait titel",
          "Geen bron",
          "Goede spelling"
        ],
        correct: [0,1,2]
      },
      {
        vraag: "Wat is bron checken?",
        antwoorden: [
          "Kijken waar info vandaan komt",
          "Bellen",
          "Reacties lezen",
          "Niets doen"
        ],
        correct: [0]
      },
      {
        vraag: "Waar komt fake nieuws vaak voor?",
        antwoorden: [
          "Social media",
          "WhatsApp",
          "Nieuwsapps",
          "Schoolboeken"
        ],
        correct: [0,1]
      },
      {
        vraag: "Waarom is fake nieuws gevaarlijk?",
        antwoorden: [
          "Verkeerde info",
          "Paniek",
          "Altijd grappig",
          "Beïnvloedt mening"
        ],
        correct: [0,1,3]
      },
      {
        vraag: "Wat is clickbait?",
        antwoorden: [
          "Neutrale titel",
          "Misleidende titel",
          "Wetenschappelijk artikel",
          "Nieuws zonder titel"
        ],
        correct: [1]
      },
      {
        vraag: "Wat moet je NIET doen?",
        antwoorden: [
          "Controleren",
          "Delen zonder check",
          "Bron zoeken",
          "Twijfelen"
        ],
        correct: [1]
      }
    ];

    let huidigeVraag = 0;
    let score = 0;

    function toonVraag() {
      document.getElementById("score").textContent = "Score: " + score;
      const resultaatElement = document.getElementById("resultaat");
      resultaatElement.style.color = "green";
      const vraagElement = document.getElementById("vraag");
      const antwoordenDiv = document.getElementById("antwoorden");

      vraagElement.textContent = vragen[huidigeVraag].vraag;
      antwoordenDiv.innerHTML = "";

      vragen[huidigeVraag].antwoorden.forEach((antwoord, index) => {
        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = index;
        
        const span = document.createElement("span"); 
        span.textContent = " " + antwoord;           
        
        label.appendChild(checkbox);
        label.appendChild(span);                    
        
        antwoordenDiv.appendChild(label);
        antwoordenDiv.appendChild(document.createElement("br"));
      });

      const knop = document.createElement("button");
      knop.textContent = "Check antwoord";
      knop.onclick = checkAntwoord;

      antwoordenDiv.appendChild(knop);
    }

    function checkAntwoord() {
      const checkboxes = document.querySelectorAll("#antwoorden input");
      const gekozen = [];

      checkboxes.forEach((cb, index) => {
        if (cb.checked) {
          gekozen.push(index);
        }
      });

      if (gekozen.length === 0) {
        alert("Selecteer minstens één antwoord voordat je verder gaat.");
        return;
      }

      const correct = vragen[huidigeVraag].correct;

      const goed =
        gekozen.length === correct.length &&
        gekozen.every(i => correct.includes(i));

      if (goed) {
        score++;
      }

      huidigeVraag++;

      if (huidigeVraag < vragen.length) {
        toonVraag();
      } else {
        document.getElementById("vraag").textContent = "Klaar!";
        document.getElementById("antwoorden").innerHTML = "";
        document.getElementById("resultaat").textContent =
          "Eindscore: " + score + " / " + vragen.length;
      }
    }

    toonVraag();
