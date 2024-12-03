var randHit;

function makeBubble(){
    var clutter = "";
    for( var i=1; i<120; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<span class="bubble">${rn}</span>`;
        
    }
    document.querySelector("#pbottom").innerHTML = clutter; 
}

var time = 60;
function getTimer(){
    var timeInt = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timeval").textContent = time;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
        
    },1000);

}

function getNewHit(){
    randHit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = randHit;
}

function increaseScore(){
    var score = 0;
    document.querySelector("#pbottom").addEventListener('click', function(dets){
        var clickedNumber = Number(dets.target.textContent);
        if(clickedNumber === randHit){
            score += 10;
            document.querySelector("#scoreval").textContent = score;
            getNewHit();
            makeBubble();
        }
    })
}


makeBubble();
getTimer();
getNewHit();
increaseScore();