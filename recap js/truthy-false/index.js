const isActive = true;
const showActive = () => console.log("show user active");
const hideActive = () => console.log("hide user");

// isActive ? showActive() : hideActive();

isActive && showActive();
isActive || hideActive();

const name = ""; //false
const email = " "; //true

if (name) {
  console.log(true);
} else {
  console.log(false);
}
