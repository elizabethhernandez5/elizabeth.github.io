function increaseFontSize() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function handleRadioButtonChange(){
    var textArea = document.getElementById("textInput");
    var button = event.target;
    var text = button.textContent;

    if(text === "FancyShmancy"){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue" ;
        textArea.style.textDecoration = "underline";
    } else if(text === "BoringBetty") {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"; //reset color
        textArea.style.textDecoration = "none";
    }
}

//function to uppercase text in the text area and add "-Moo" to the last word of each sentence 

function uppercaseAndMoo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    var sentences = text.split(". ");
    for (var i=0; i < sentences.length; i++){
        var words = sentences[i].split(" ");
        words[words.length -1] = words[words.length - 1].toUpperCase() + "-Moo";
        sentences[i]= words.join(" ");
    }

    textArea.value = sentences.join(". ");

}