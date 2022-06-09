
(function () {

    var names = ["Yakoov", "Johnny", "Jennie", "Jay", "Elo", "Mesach", "Alon", "Ambo", "Bishop", "Joven"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toUpperCase();
    
      if (firstLetter == 'J') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();