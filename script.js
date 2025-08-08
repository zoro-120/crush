
document.getElementById('duration').addEventListener('change', function() {
    let value = this.value;
    let message = "";

    if (value === "Just met") {
        message = "😳 Aww... you just met them! Are you already planning the wedding? 💍😂";
    } 
    else if (value === "A few weeks") {
        message = "⏳ Just a few weeks? And you’re already smiling at your phone like crazy 😏📱";
    } 
    else if (value === "A few months") {
        message = "💞 A few months in... That’s the *'I know your coffee order'* stage ☕😉";
    } 
    else if (value === "1-3 Years") {
        message = "💖 Woww, a whole year of one-sided love? Should I send you a participation trophy or just more ice cream recipes?😂";
    }

    else if (value === "More than a year") {
        message = "💖 More than a year? Wow, you must have a PhD in unrequited love! 🎓😂";
    }
    if (message) {
        let alertBox = document.getElementById('alertMsg');
        alertBox.innerHTML = message + "<br><button onclick='closeAlert()'>OK 💖</button>";
        alertBox.style.display = "block";
    }
});

function closeAlert() {
    document.getElementById('alertMsg').style.display = "none";}


    document.getElementById('personality').addEventListener('change', function() {
    let value = this.value;
    let message = "";

    if (value === "Extrovert") {
        message = "😳 Mhhhhhh.....They have life time energyyyyy😂";
    } 
    else if (value === "Introvert") {
        message = "awwwww!!!!They are so innocent i guess😂😏";
    } 
                
    else if (value === "Mixed") {
        message = "💞 Ahaaaa they are giving mixed signals ☕😉";
    } 
    
    else if (value === "Mysterious") {
        message = "Ohhh...he is so mysterious, there must be something going on! 🕵️‍♂️😂";
    }

    if (message) {
        let alertBox = document.getElementById('alertMsg');
        alertBox.innerHTML = message + "<br><button onclick='closeAlert()'>OK 💖</button>";
        alertBox.style.display = "block";
    }
});