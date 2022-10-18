function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  noFill() 
  rectMode(CENTER)


  // ellipse(50,50,80)
  //     stroke(mouseX%256,mouseY%256,100)
  //     strokeWeight(3)
  //     ellipse(50,50,25)
  //     stroke("#f15bb5")
  //     rect(25,25,25)
  //     stroke("#00bbf9")

  //     ellipse(50+(1*50),50,80)
  //     stroke(mouseX%256,mouseY%256,100)
  //     strokeWeight(3)
  //     ellipse(50+(1*50),50,25)
  //     stroke("#f15bb5")
  //     rect(25+(1*50),25,25)
  //     stroke("#00bbf9")

      

      // ellipse(50+(2*50),50,80+mouseX/10)
      // stroke(mouseX%256,mouseY%256,100)
      // strokeWeight(3)
      // ellipse(50+(2*50),50,25+mouseY/5)
      // stroke("#f15bb5")
      // rect(25+(2*50),25,25)
      // stroke("#00bbf9")

    
    // for(var i=0;i<(width/50);i=i+1)
    // {
    //   ellipse(50+(i*50),50,80)
    //   stroke(mouseX%256,mouseY%256,100)
    //   strokeWeight(3)
    //   ellipse(50+(i*50),50,25)
    //   stroke("#f15bb5")
    //   rect(25+(i*50),25+1*50,25)
    //   stroke("#00bbf9")
    // }
  
    
  for(var j=0;j<(height/50);j++) {
    for(var i=0;i<(width/50);i=i+1)
    {
      ellipse(50+(i*50),50+(j*50),80+mouseX/10)
      stroke(mouseX%256,mouseY%256,100)
      strokeWeight(3)
      ellipse(50+(i*50),50+(j*50),25+mouseY/5)
      stroke("#f15bb5")
      rect(25+(i*50),25+(j*50),25)
      stroke("#00bbf9")
    }

  }

}
