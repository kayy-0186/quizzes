const questions=[
  {q:"Wat betekent 'mediawijs zijn'?",a:["Zoveel mogelijk berichten posten om meer volgers te krijgen","Bewust, kritisch en veilig omgaan met media en informatie online","Alleen sociale media gebruiken voor entertainment","Altijd alles geloven wat je op internet ziet"],c:1},
  {q:"Wat is een belangrijk verschil tussen vroeger en nu volgens de video?",a:["Mensen sturen minder berichten via WhatsApp","Mensen delen nu sneller informatie en foto's via sociale media","Mensen gebruiken geen e-mail meer","Mensen lezen geen online nieuws meer"],c:1},
  {q:"Waarom kan het gevaarlijk zijn om een foto op sociale media te plaatsen?",a:["De foto kan automatisch worden verwijderd","De foto kan door veel mensen worden gedeeld zonder jouw controle","De foto kan alleen door je beste vrienden worden bekeken","De foto wordt automatisch privé gemaakt"],c:1},
  {q:"Welke situatie past het best bij mediawijs gedrag?",a:["Een foto meteen posten op Instagram zonder na te denken","Een bericht doorsturen op Snapchat zonder het te lezen","Eerst nadenken wie jouw bericht op TikTok kan zien","Alles delen zodat je meer likes krijgt"],c:2},
  {q:"Wat wordt bedoeld met verlies van controle over je privéleven online?",a:["Accounts worden automatisch verwijderd","Berichten en foto's kunnen zich snel verspreiden op platforms","Alleen vrienden kunnen je profiel bekijken","Sociale media passen je berichten automatisch aan"],c:1},
  {q:"Waarom is het belangrijk kritisch te zijn bij berichten op sociale media?",a:["Informatie is niet altijd betrouwbaar","Berichten kunnen anders niet geplaatst worden","Alleen influencers mogen informatie delen","Berichten verdwijnen anders"],c:0},
  {q:"Wat kan er gebeuren met een privébericht?",a:["Alleen één persoon kan het lezen","Het kan doorgestuurd worden","Het wordt automatisch gewist","Het blijft altijd geheim"],c:1},
  {q:"Wat is een voorbeeld van een risico op sociale media?",a:["Virussen of malware via links","Te veel meldingen","Slechte internetverbinding","Te weinig opslag"],c:0},
  {q:"Waarom is nadenken voordat je iets post belangrijk?",a:["Berichten blijven vaak permanent online","Account wordt anders geblokkeerd","Berichten mogen alleen overdag","Je krijgt anders minder volgers"],c:0},
  {q:"Welke uitspraak past bij mediawijs gedrag?",a:["Alles delen zolang het grappig is","Alleen posten voor likes","Nadenken over privacy, veiligheid en gevolgen","Alles doorsturen"],c:2}
  ];
  
  let current=0;
  let score=0;
  let userAnswers=[];
  
  function loadQuestion(){
      let q=questions[current];
      document.getElementById("question").innerText=q.q;
  
      let answers="";
      q.a.forEach((ans,i)=>{
          answers+=`<div><button onclick="answer(${i})">${ans}</button></div>`;
      });
      document.getElementById("answers").innerHTML=answers;
  }
  
  function answer(i){
      userAnswers.push(i);
      if(i===questions[current].c) score++;
  
      current++;
      if(current<questions.length){
          loadQuestion();
      }else{

          localStorage.setItem("score",score);
          localStorage.setItem("answers",JSON.stringify(userAnswers));
          localStorage.setItem("questions",JSON.stringify(questions));

          window.location="score.html";
      }
  }
  
  window.onload=loadQuestion;
  
  const video=document.querySelector('.video');
  const muteBtn=document.querySelector('.mute-btn');
  
  muteBtn.addEventListener('click',()=>{
      video.muted=!video.muted;
      muteBtn.textContent=video.muted?'🔇':'🔊';
  });