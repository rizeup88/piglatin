var latin = function(data) {
  var latinSentence = [];
  data.forEach(function(word) {
    word = word.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var latinWords = "";
    for (i = 0; i < word.length; i++) {
          vowels.forEach(function(vowel) {
            if (word[i] === vowel) {
              if (word[i] === "u" && word[i - 1] === "q") {
                latinWords = word.splice((i + 1),word.length).join("") + word.splice(0,(i + 1)).join("").toUpperCase();
                } else {
                latinWords = word.splice(i, word.length).join("") + word.splice(0, i).join("").toUpperCase();
                }
                if (i === 0) {
                  latinWords += "Way";
                } else {
                  latinWords += "ay";
                }
                latinSentence.push(latinWords)
              }
            })
        }
}); 
  return latinSentence.join(" ");
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var data = $("#words").val();
    data = data.split(" ");
    var sentence = latin(data);
    $("#result").text(sentence).show()
  })
})