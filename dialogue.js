


var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 80,
   normal: 40,
   fast: 20,
   superFast: 10
};

var lines = [
    [
        { speed: speeds.normal, string: "Oh, hello!" },
        { speed: speeds.pause, string: "", pause: true },
        { speed: speeds.normal, string: "Have you seen my pet" },
        { speed: speeds.normal, string: "frog", classes: ["green"] },
        { speed: speeds.normal, string: "around?" }
    ], 
    [
        { speed: speeds.normal, string: "THIS IS THE SECOND LINE!" },
    ],
    [
        { speed: speeds.normal, string: "THIS IS THE Third LINE!" },
    ]
];

var currentIndex = -1;

$(document).ready(function(){
    reset();
    document.addEventListener("keypress", handleKeyPress);
    setTimeout(() => { playNextLine(); }, 500)
    $('body').click(playNextLine);
});

function handleKeyPress(event) {
    if (event.keyCode === 32 || event.which === 32) {
        playNextLine();
    }
}

function reset() {
    currentIndex = -1;
}

function playNextLine() {
    let index = currentIndex + 1
    if (index < 0 || index > lines.length - 1) return;
    currentIndex = index;
    var line = lines[currentIndex];
    var container = $(".text");
    container.children('span').remove();
    var characters = [];
    line.forEach((segment, index) => {
        if (index < line.length - 1) {
            segment.string += " "; //Add a space between lines
        }

        segment.string.split("").forEach((character) => {
            var span = document.createElement("span");
            span.textContent = character;
            container.append(span);
            characters.push({
                span: span,
                isSpace: character === " " && !segment.pause,
                delayAfter: segment.speed,
                classes: segment.classes || []
            });
        });
    });

    revealOneCharacter(characters);
}

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

