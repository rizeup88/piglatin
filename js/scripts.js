$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var words = $("#words").val();
    var splitWords = words.split('');
    var latinWords = []

    for (i = 0; i < vowels.length; i++) {
      if (splitWords[0] === vowels[i])
        splitWords = splitWords.join("") + "way";
        i = vowels.length;
    } 
    for (i = 0; i < consonants.length; i++) {
      if (splitWords[0] === consonants[i])
        latinWords = splitWords.join("") + splitWords[0].slice() + "ay";
        i = consonants.length;
        console.log(latinWords);
    }
    });
  });