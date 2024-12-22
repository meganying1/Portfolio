const words = ["Megan Ying", "an engineer", "a programmer", "a scientist"];
  let i = 0;
  let counter;
  function typeNow() {
     let word = words[i].split("");
     var loopTyping = function() {
        if (word.length > 0) {
           document.getElementById('word').innerHTML += word.shift();
        } else {
     sleep(3000)
           deleteNow();
           return false;
        };
        counter = setTimeout(loopTyping, 200);
     };
     loopTyping();
  };
  function deleteNow() {
     let word = words[i].split("");
     var loopDeleting = function() {
        if (word.length > 0) {
           word.pop();
           document.getElementById('word').innerHTML = word.join("");
        } else {
           if (words.length > (i + 1)) {
              i++;
           } else {
              i = 0;
           };
           typeNow();
           return false;
        };
        counter = setTimeout(loopDeleting, 100);
     };
     loopDeleting();
  };
  function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
   if ((new Date().getTime() - start) > milliseconds){
   break;
   }
}
  }
  typeNow();
