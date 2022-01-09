let WIDTH = 480
let HEIGHT = 360
let draw = SVG().addTo(".game").size(WIDTH, HEIGHT)
let bg = draw.image("desert.png").size(WIDTH, HEIGHT)
let dino = draw.image("dino1.png").size(84, 67).move(0, 200)
let cactus = draw.image("cactus2.png").size(50, 62).move(400, 205)
let score = draw.text("0").move(400, 20).font({size: 40}).fill("white")
let interval1 = 0
let interval2 = 0
let stepy = 0
let points = 0
let step = draw.text("Stage: 1 to 8").move(80, 20).font({size: 40})
let isjump = false
function move(){
    cactus.dx(-3)
    if(isjump == true){//когда дино в прыжке, движется вверх
        dino.dy(stepy)
        stepy += 0.5
        if(dino.y() >= 200){
            isjump = false
        }
    }
    if(cactus.x() <= 0){
        cactus.x(400)
        points += 1
        score.text(points)
    }
    if(points >= 10){
        cactus.dx(-0.5)
        step.text("Stage: 2 to 8")
    }
    if(points >= 20){
        cactus.dx(-0.5)
        step.text("Stage: 3 to 8")
    }
    if(points >= 35){
        cactus.dx(-0.5)
        step.text("Stage: 4 to 8")
    }
    if(points >= 50){
        cactus.dx(-0.5)
        step.text("Stage: 5 to 8")
    }
    if(points >= 80){
        cactus.dx(-0.5)
        step.text("Stage: 6 to 8")
    }
    if(points >= 90){
        cactus.dx(-0.5)
        step.text("Stage: 7 to 8")
    }
    if(points == 100){
        cactus.dx(-0.5)
        step.text("Stage: 8 to 8")
        alert("Yow Win!!!")
    }
    if(points >= 100){
        step.text("Stage: infinity")
    }
    let collision = dino.x()+dino.width() >= cactus.x() && dino.y()+dino.height() >= cactus.y() && dino.x() <= cactus.x()+cactus.width()
    if(collision){
        clearInterval(interval2)
        clearInterval(interval1)
        bg.load("desertGO.png")
    }
}
function anima_dino(){
    if(dino.node.href.baseVal == "dino1.png"){
        dino.load("dino2.png")
    }
    else if(dino.node.href.baseVal == "dino2.png"){
        dino.load("dino3.png")
    }
    else{
        dino.load("dino1.png")
    }
}
function dino_jump(event){
    let key = event.keyCode
    if(key == 32 && isjump == false){
        stepy = -13.85
        isjump = true
    }
}
document.addEventListener("keydown", dino_jump)
interval1 = setInterval(() => {
    anima_dino()
}, 100);
interval2 = setInterval(() => {
    move()
}, 10);
