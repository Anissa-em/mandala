let hue = 0; // Variabele voor kleur van de regenbooggradiënt

function setup() {
  //createCanvas(windowWidth, windowHeight);  
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('backgroundCanvas'); // Wijs een id toe aan het canvas

  
  background(0);
  colorMode(HSB, 360, 100, 100); // Kleurmodus voor gradient
    hue = random(360);
  angleMode(DEGREES); // graden voor rotatieberekeningen
}

function draw() {
  // De tekenlogica wordt in mouseDragged gedaan
}

function mouseDragged() {
  let numberOfPoints = 8; // Aantal punten van de mandala
  let angle = 360 / numberOfPoints; // Bereken de hoek tussen de punten
  
  for (let i = 0; i < numberOfPoints; i++) {
    // Bereken de positie van elk punt
    let x = cos(angle * i) * (mouseX - width / 2) - sin(angle * i) * (mouseY - height / 2) + width / 2;
    let y = sin(angle * i) * (mouseX - width / 2) + cos(angle * i) * (mouseY - height / 2) + height / 2;
    
  
  // Genereer willekeurige afmetingen voor elke vorm
    let w = random(5, 20); 
    let h = random(5, 20); 


    // Teken een cirkel op elke berekende positie
    fill((hue + i * 10) % 360, 100, 100); // Pas de kleur aan op basis van de regenbooggradiënt
    noStroke();
    ellipse(x, y, w, h); // Teken een ellips met willekeurige afmetingen
  }
  
    // Verhoog de hue-waarde voor de volgende iteratie
  hue += 0.2; // Pas de snelheid van de verandering van de regenbooggradiënt aan indien gewenst
}

function mousePressed() {
  // Reset de hue-waarde wanneer de muis wordt ingedrukt
  hue = random(360);

}

function mouseReleased() {
  // Pas de hue-waarde aan op basis van de muispositie wanneer de muis wordt losgelaten
  hue = map(mouseX, 0, width, 0, 360);
}



function keyPressed() {
  if (keyCode === 32) { // 32 is de keyCode voor de spatiebalk
    background(0); // Wis het canvas
  }
  if (keyCode === LEFT_ARROW) {
    background(0)
  }
  
  if (keyCode === RIGHT_ARROW){
    background(255)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  const overlay = document.getElementById("overlay");

  toggleButton.addEventListener("click", function() {
    overlay.classList.toggle("hidden");
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      toggleButton.style.backgroundColor = "transparant";
      toggleButton.style.color = "white";
      overlay.classList.remove("black-bg");
    } else if (event.key === "ArrowRight") {
      toggleButton.style.backgroundColor = "transparant";
      toggleButton.style.color = "black";
      overlay.classList.add("black-bg");
    }
  });
});






