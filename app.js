//Element object
const button = document.querySelector("button");
//ElementObject.method(argument1,argument2)
//argument1= stringEvent,argument2=anontmous callback function expression
//addEventListner-when stringevent happens on target element Object
//addEventLister executes the function expression
button.addEventListener("click", function () {
  console.log("test");
});
