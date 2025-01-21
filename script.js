let btnContainer = document.querySelector(".btn-container");

let lifts = {
  lift1: document.querySelector(".lift.one"),
  lift2: document.querySelector(".lift.two"),
  lift3: document.querySelector(".lift.three")
}

console.log(lifts["lift2"])


let liftStep = 100

function moveLift(lift,targetFloor) {
  lift.style.top = targetFloor * liftStep + "px"
}

function findClosestLift(lifts, targetFloor) {
  let closestLift = null;
  let closestDistance = Infinity;

  Object.values(lifts).forEach((lift) => {
    let currentFloor = parseInt(lift.style.top || 0) / liftStep;
    let distance = Math.abs(targetFloor - currentFloor);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestLift = lift;
    }
  });

  return closestLift;
}
for(let i = 0; i < 20; i++) {
  let button = document.createElement("div")
  button.classList.add("range")
  button.id = i

  button.addEventListener("click", () => {
    let targetFloor = parseInt(button.id)
    let closestLift = findClosestLift(lifts,targetFloor)
    moveLift(closestLift,targetFloor)
  })

btnContainer.appendChild(button)
}

