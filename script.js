/* PAGE SWITCH */
document.getElementById("startBtn").onclick = function(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    startAll();
};

/* START EVERYTHING */
function startAll(){
    // Music
    document.getElementById("music").play().catch(()=>{});

    // Typewriter
    const arr=[
        "Dear Soulmate❤️, wishing you a very Happy Birthday! 🎉",
        "May your day be filled with love and joy 💖",
        "You are truly special—enjoy your day! 🥳",
        "Like every day ,I'm thinking of you today but today a little more",
        "I'm missing you so much and i hope I'm being missing too! Happy Birth day " ,
       "to man who has the most gentle,caring and loving heart",
        "It is your heart that makes me fall for you each day a little more!",
        "Happy Wala Birthday MY❤️😍❤️"
    ];
    typeMessages(arr,0);

    // Slideshow
    startSlideshow();

    // Hearts
    setInterval(()=>{
        const h=document.createElement("div");
        h.className="heart";
        h.innerHTML="❤️";
        h.style.left=Math.random()*90+"%";
        h.style.top="100vh";
        document.getElementById("page2").appendChild(h);
        setTimeout(()=>h.remove(),6000);
    },500);

    // Stars
    setInterval(()=>{
        const s=document.createElement("div");
        s.className="star";
        s.style.left=Math.random()*100+"%";
        document.getElementById("page2").appendChild(s);
        setTimeout(()=>s.remove(),4000);
    },300);
}

/* TYPEWRITER */
function typeMessages(arr,idx){
    if(idx>=arr.length) return;
    const t=document.getElementById("msg");
    let i=0;
    t.innerHTML="";
    function type(){
        if(i<arr[idx].length){
            t.innerHTML+=arr[idx][i];
            i++; setTimeout(type,40);
        }else{
            setTimeout(()=>typeMessages(arr,idx+1),1200);
        }
    }
    type();
}

/* SLIDESHOW */
function startSlideshow(){
    const slides=document.querySelectorAll(".slideshow img");
    let c=0;
    setInterval(()=>{
        slides.forEach((s,i)=>s.classList.remove('active'));
        slides[c].classList.add('active');
        c = (c + 1) % slides.length;
    },3000);
}
