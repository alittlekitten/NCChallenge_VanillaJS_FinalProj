const body = document.querySelector("body");

const IMG_NUMBER = 3; 

/* API가 자동으로 해줘서 굳이 넣어주지 않아도 된다! 없어도 된다는 이야기!
function handleImgLoad(){
    console.log("finished loading");
}
*/

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage"); // image에 bgImage라는 class를 넣는다
    body.appendChild(image);
    // image.addEventListener("loadend", handleImgLoad) // table listener를 이미지화 하기 위해 even listener를 연결
}


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; 
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();