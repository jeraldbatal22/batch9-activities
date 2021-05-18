const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

var addMargin = 200

function moveRobot() {
    //add code here
    robot.style.marginLeft = addMargin;
    addMargin += 50
}

robot.addEventListener('click', moveRobot) 