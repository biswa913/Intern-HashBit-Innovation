function createDiv(width, height, text) {
    let newDiv = document.createElement("div");
    newDiv.style.width = width + "px"; 
    newDiv.style.height = height + "px"; 
    newDiv.textContent = text; 

    document.getElementById("container").appendChild(newDiv); // Append to the container
}
console.log(createDiv(20,40,"Biswa Prakash Mallick"));