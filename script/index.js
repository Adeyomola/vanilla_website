let visitor = document.createElement("div");

let visitorsName = prompt("Please enter a name");
alert("Welcome" + " " + visitorsName);

visitor.innerText = "Welcome " + visitorsName;
visitor.style.color = "black";
visitor.style.fontSize = "20px";
visitor.style.fontFamily = "Candara"
visitor.style.width = "80%";
visitor.style.marginLeft = "auto";
visitor.style.marginRight = "auto"
visitor.style.padding = "10px"
visitor.style.textAlign = "center"

const nav = document.querySelector("nav")
nav.insertAdjacentElement("afterend", visitor)
