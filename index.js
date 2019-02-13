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

/* function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const another = new Circle(1); */

/**************************************
 * 5-Constructor Property
 */

/* // Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const another = new Circle(1); */

/**************************************
 * 6-Functions are Objects
 */

/* function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1); */

/**************************************
 * 7-Value vs Reference Types
 */

/* let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); */

/**************************************
 * 8-Adding or Removing Properties
 */

/* function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle(10);

circle.location = { x: 1 };

const propertyName = 'location';
circle[propertyName] = { x: 1 };

delete circle.location; */