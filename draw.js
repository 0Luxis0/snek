var drawModule = (function () { 

  function drawBody (x, y) {
        ctx.fillStyle = 'black';
        ctx.fillRect(x*bodySize, y*bodySize, bodySize, bodySize);
        //ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*bodySize, y*bodySize, bodySize, bodySize);
  }

  function pizza (x, y) {
        ctx.fillStyle = 'black';
        ctx.fillRect(x*bodySize, y*bodySize, bodySize, bodySize);
        ctx.fillStyle = 'black';
        ctx.fillRect(x*bodySize+1, y*bodySize+1, bodySize-2, bodySize-2);
  }

   function scoreText () {
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 145, h-5);
  }

  function createBody () {
    body = { x : 0, y : 0 };
  }
  
  function paint (){
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, w, h);

      btn.setAttribute('disabled', true);
        
      if (body.x == -1 || body.x == w/bodySize || body.y == -1 || body.y == h/bodySize) {
          //restart game
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;          
        }
        
        if(body.x == food.x && body.y == food.y) {
            score ++;
          
            createFood(); 
        }
        
        drawModule.drawBody(body.x, body.y); 
        pizza(food.x, food.y); 
        scoreText();
  }

  function createFood () {
      food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }
  }

  function checkCollision (x, y, array) { // might be used later.
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  }

  function init (){
      createBody();
      createFood();
      gameloop = setInterval(paint, 60);
  }


    return {
      init : init,
      drawBody : drawBody
    };

    
}());
