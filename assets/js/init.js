$(document).ready(function(){    
    var score = 0;
    var lastGuess = "";

    var strikes = 5;


    var words = ["fencing", "curling", "shot-put", "track", "swimming", "diving", "snowboarding", "basketball", "judo", "table tennis", "tennis", "skiing"];

        var thisGameWord = new String();
        var randNum = Math.floor((Math.random() * (words.length - 1)));
        console.log(randNum);
        console.log(words[randNum]);
        thisGameWord = words[randNum];
        console.log(thisGameWord.charAt(2));
        var boxes = [];
        var alreadyShown = [];
        var guessed = [];
    
        for(i = 0; i < thisGameWord.length; i++){
            var newBox = $("<div>");
            // newBox.attr("num", i);
            newBox.attr("letter", thisGameWord.charAt(i));
            newBox.addClass("box");
            newBox.addClass(i);
            newBox.addClass("border")
            newBox.addClass("border-dark");
            newBox.text(thisGameWord.charAt(i))
            newBox.hide();
            $("#boxHolder").append(newBox);
            boxes.push(newBox);
        } 
        console.log(boxes);

        document.onkeyup = function(event) {
            var guess = event.key;

            if(thisGameWord.search(guess) != -1){
                alert("you got it right")
                var index = thisGameWord.indexOf(guess, 0);
                if(!alreadyShown.includes(index)){
                    boxes[index].show();
                    alreadyShown.push(index);
                    console.log(alreadyShown);
                    var newIndex = thisGameWord.indexOf(guess, index + 1);
                    if(!alreadyShown.includes(newIndex)){
                        console.log(newIndex);
                        boxes[newIndex].show();
                        alreadyShown.push(newIndex);
                        console.log(alreadyShown);
                    }
                }
                
            } else if(thisGameWord.search(guess) === -1){
                alert("sorry, wrong!");
            }
        }



});
