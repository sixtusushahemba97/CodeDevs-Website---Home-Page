// Js for MenuLinks
var MenuLinks = document.getElementById('MenuLinks')
MenuLinks.style.maxHeight = '0px'
function Menutoggle() {
  if (MenuLinks.style.maxHeight == '0px') {
    MenuLinks.style.maxHeight = '200px'
  } else {
    MenuLinks.style.maxHeight = '0px'
  }
}
