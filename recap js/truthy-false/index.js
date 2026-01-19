const isActive = true;
const showActive = () => console.log("show user active");
const hideActive = () => console.log("hide user");

// isActive ? showActive() : hideActive();

isActive && showActive();
isActive || hideActive();
