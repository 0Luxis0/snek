var drawModule = (function () { 

    function drawBody (x, y) {
        draw();
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

    function drawBullet (x, y){
        //draw();
        console.log(x, y);
        ctx.fillStyle = 'black';
        ctx.fillRect(x*bodySize+5, y*bodySize+5, bulletSize, bulletSize);
        ctx.fillRect(x*bodySize, y*bodySize, bodySize, bodySize);
    }
  
    function endMapCollision (){
        if (body.x == -1 || body.x == w/bodySize || body.y == -1 || body.y == h/bodySize) {
          //restart game
          btn.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          return;          
        }
        

    }
    
    function scorePoint(x, y) {
       if(x == food.x && y == food.y) {
            score ++;
          
            createFood(); 
        }
        
        if(dirX == food.x && dirY == food.y){
            score ++;
            createFood();
        }
        
        //drawModule.drawBody(body.x, body.y); 
        pizza(food.x, food.y); 
        scoreText();

    }
 
    function draw (){
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);

        btn.setAttribute('disabled', true);
        
        pizza(food.x, food.y);
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

    return {
        createBody : createBody,
        drawBody : drawBody,
        drawBullet : drawBullet,
        draw : draw,
        scorePoint : scorePoint,
        createFood : createFood
    };

    
}());
