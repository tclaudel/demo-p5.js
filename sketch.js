var capture;
var slider;

// éxécutée au démarrage
function setup() {
  createCanvas(640, 480); 
  capture = createCapture(VIDEO); 
  capture.size(width,height); 
  capture.hide(); 
  slider = createSlider(0, 255, 50);
  
}

// éxécutée en boucle après la fonction setup
function draw() 
{
  image(capture, 0, 0);
  var seuil = slider.value();
  capture.loadPixels();
  if(capture.pixels.lenght > 0); {
    var pixels = capture.pixels;
    var total = 0;
    var i = 0;
    for(var y = 0; y < height; y++)
    {
      for(var x = 0; x < width; x++)
      {
        //var i = (x + (y * width)) * 4;
        var red = pixels[i];
        if(red < seuil) 
        {
          pixels[i] = 0;
          pixels[i + 1] = 0;
          pixels[i + 2] = 0;
        }
        else 
        {
          pixels[i] = 255;
          pixels[i + 1] = 255;
          pixels[i + 2] = 255;
        }
        i += 4;
      }
    }
  
  capture.updatePixels();
    
  translate(width, 0);
  scale(-1, 1);
  image (capture, 0, 0);
  }
}
