let player
let speed = 5

function setup() {
    createCanvas(windowWidth, windowHeight)
    player = {
        pos: createVector(0, 0),
        vel: createVector(0, 0),
        
        draw: () => {
            fill(255, 0, 0)
            ellipse(player.pos.x, player.pos.y, 30, 30)
        },
    
        tick: () => {
            player.pos.add(player.vel)
        }
    }
}

function draw() {
    background(0)

    player.tick()
    player.draw()
}

function keyPressed() {
    if (keyCode == DOWN_ARROW) {
        player.vel.set(0, speed)
    } else if (keyCode == UP_ARROW) {
        player.vel.set(0, -speed)
    } else if (keyCode == LEFT_ARROW) {
        player.vel.set(-speed, 0)
    } else if (keyCode == RIGHT_ARROW) {
        player.vel.set(speed, 0)
    }
}

function keyReleased() {
    player.vel.set(0, 0)
}