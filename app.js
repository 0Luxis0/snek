(function (window, document, drawModule, undefined) {

    var btn = document.getElementById('btn');
    
    btn.addEventListener("click", function(){ drawModule.init();});
	document.onkeydown = function(event) {

        keyCode = event.keyCode;
        
        var bodyX = body.x;
        var bodyY = body.y;

        switch(keyCode) {
        
            case 65:  // left 
                body.x--;
                break;

            case 68:  // right
                body.x++;
                break;

            case 87:  // up
                body.y--;
                break;

            case 83: // down
                body.y++;
                break;
        }
        
        drawModule.drawBody(body.x, body.y);

    }


})(window, document, drawModule);
