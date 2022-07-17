//Element object = document object.method(css element selector)
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

//ElementObject.method(argument1,argument2)
//argument1= stringEvent,argument2=anontmous callback function expression
//addEventListner-when stringevent happens on target element Object
//addEventLister executes the function expression
button.addEventListener("click", function () {
  //execute - makeRandomColor() - returns string
  const newColor = makeRandomColor();

  //body element object - shortcut
  //bodyobject.style is CSSStyleDeclaration Object
  //CSSStyleDeclarationObject.property
  document.body.style.backgroundColor = newColor;

  //h1 element obejct.property
  //innerText - visible on page
  //console.dir(h1);
  h1.innerText = newColor;
});

//Anonymous Arrow function expression - stored in variable
const makeRandomColor = () => {
  //color rgb range 255
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`; //string template literal
};
