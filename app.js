(function (window, document, drawModule, undefined) {

    var btn = document.getElementById('btn');
    
    btn.addEventListener("click", function(){ drawModule.init();});
	document.onkeydown = function(event) {

        keyCode = event.keyCode;
        
        var bodyX = body.x;
        var bodyY = body.y;
        
        //movement
        switch(keyCode) {
        
            case 65:  // a 
                body.x--;
                break;

            case 68:  // d
                body.x++;
                break;

            case 87:  // w
                body.y--;
                break;

            case 83: // s
                body.y++;
                break;
        }

        //shots
        switch(keyCode){
            case 38: // up
                dirX = body.x;
                dirY = body.y;
                
                while(true){
                    drawModule.drawBullet(dirX, dirY);
                    dirY--;
                    
                    if(dirY == -1){
                        break;
                    }

                }
                break;
            case 40: // down
                dirX = body.x;
                dirY = body.y;
                
                while(true){
                    drawModule.drawBullet(dirX, dirY);
                    dirY++;
                    
                    if(dirY == h/bulletSize){
                        break;
                    }

                }

                break;
            case 37: // left
                dirX = body.x;
                dirY = body.y;
                
                while(true){
                    drawModule.drawBullet(dirX, dirY);
                    dirX--;
                    
                    if(dirX == -1){
                        break;
                    }

                }

                break;
            case 39: // right
                dirX = body.x;
                dirY = body.y;
                
                while(true){
                    drawModule.drawBullet(dirX, dirY);
                    dirX++;
                    
                    if(dirX == w/bulletSize){
                        break;
                    }

                }
                break;
        }
        
        drawModule.drawBody(body.x, body.y);

    }


})(window, document, drawModule);
