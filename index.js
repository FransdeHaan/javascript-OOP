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

/**************************************
 * 9-Enumerating Properties
 */

/* function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== 'function')
  console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
  console.log('Circle has a radius.'); */

/**************************************
 * 10-Abstraction
 */

/* function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function () {

  }

  this.draw = function () {
    this.computeOptimumLocation();

    console.log('draw');
  }
}

const circle = new Circle(10); */

/**************************************
 * 11-Private Properties and Methods
 */

/* function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    //..
  }

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log('draw');
  }
}

const circle = new Circle(10);
circle.draw(); */

/**************************************
 * 12-Getters and Setters
 */

/* function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error('Invalid location.');

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.draw(); */

/**************************************
 * 14-Exercise- Stopwatch
 */

/* function Stopwatch() {
  let running = false;
  let timeStarted = 0;
  let duration = null;

  this.start = function () {
    if (running)
      throw new Error('Stopwatch has already started.');

    running = true;
    timeStarted = Date.now();
  };

  this.stop = function () {
    if (!running)
      throw new Error('Stopwatch is not started');

    running = false;
    duration += Date.now() - timeStarted;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      console.log(duration/1000);
    }
  });

  this.reset = function () {
    running = false;
    timeStarted = null;
    duration = null;
  }
} */

/**************************************
 * 4-Property Descriptors
 */

/* let person = { name: 'Frans' };

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});

delete person.name;

console.log(person); */

/**************************************
 * 5-Constructor Prototypes
 */



// myObj.__proto__ (parent of myObj)
// Constructor.prototype ()

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype

const circle = new Circle(1);