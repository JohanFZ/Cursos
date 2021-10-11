import { createElemento, render } from "./libreria.js";

const Logo = createElemento("img", {
  className: "logo",
  alt: "logo",
  src: ".images/logo.svg"
})

const Nav = createElemento("nav", {className : "main-nav"});

const Header = createElemento("header", {
  className: "main-header"
}, [Logo, Nav])

render(Header, document.getElementById("root"))