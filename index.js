/**************************************
 * 2-Object Literals
 */

/* const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
    console.log('draw');
  }
};

circle.draw(); */

/**************************************
 * 3-Factory Function
 */

/* function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);
circle.draw(); */

/**************************************
 * 4-Constructor Function
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const another = new Circle(1);