var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")){
    var data = element.getAttribute("data-state")
    if (state === "hidden") {
      // element.dataset.state = "number"
      element.setAttribute("data-state", "data-number")
    }
  }
});
