//Agregar un header al div en html

let header = document.createElement("header");
header.id = "mainHeader";
header.classList.add("main-header");

let root = document.getElementById("root");
//root.appendChild(header);

//Funcion crear elemento

export function createElemento(type, attrList = {}, children = []) {
  let element = document.createElement(type);

  let keys = Object.keys(attrList);
  keys.map(k => element.setAttribute(k, attrList[k]));

  children.map(child => renderChild(element, child));

  return element;
}

function renderChild(elem, child) {
  if(typeof child === "string"){
    elem.innerHTML += child;
    return
  }
  elem.appendChild(child);

}

export function render(elem, DOMelem) {
  DOMelem.appendChild(elem);
}