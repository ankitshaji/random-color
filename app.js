//Element object = document object.method(css element selector)
const button = document.querySelector("button");
//ElementObject.method(argument1,argument2)
//argument1= stringEvent,argument2=anontmous callback function expression
//addEventListner-when stringevent happens on target element Object
//addEventLister executes the function expression
button.addEventListener("click", function () {
  //color rgb range 255
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  //body element object - shortcut
  //bodyobject.style is CSSStyleDeclaration Object
  //CSSStyleDeclarationObject.property
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`; //string template literal
});
