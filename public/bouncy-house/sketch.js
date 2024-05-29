let img;
let diagnosis = "\"The spinal cord is normal in size and configuration. The conus ends at the L1 level. On delayed prone imaging of the cervical spine there is opacification of the anterior median fissure. No filling of a syrinx is identified. The cauda equina do not layer typically in the posterior thecal sac however no abnormal clumping is identified. No epidural fluid collections are identified. No abnormal contrast collections are noted within the neural foramina.\""; 

// Load the image.
function preload() {
  img = loadImage('bouncy-house.png');
}

function setup() {
  createCanvas(500, 500);

  // Resize the image.
  img.resize(300, 300);

  // Display the resized image.
  image(img, 0, 30);
  
  textStyle(ITALIC);
  text('sometimes, the more you tell it, the less it makes sense', 0, 15);
  
  textStyle(NORMAL);
  text(diagnosis, 0, 350, 500)

}

 function mouseClicked() {
    
    let newDiagnosis = splitTokens(diagnosis, 'd');
    text(shuffle(newDiagnosis), 0, 350, 500);
  }

// function shuffleFunction() {
//   let splitArea = random(0, 453);
//   let newDiagnosis = splitTokens(diagnosis, 'd');
//   text(shuffle(newDiagnosis), 0, 350, 500);
// }