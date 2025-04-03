document.getElementById("colorchange").addEventListener("click", function () {
    let color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
    let size = document.getElementById("fontsize").value + "px";
    document.getElementById("text-container").style.fontSize = size;
});

document.getElementById("italic").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
     textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    let font = document.getElementById("list").value;
    document.getElementById("text-container").style.fontFamily = font;
});

document.getElementById("getstyle").addEventListener("click", function () {
    let textContainer = document.getElementById("text-container");
    let cssProps = `color: ${textContainer.style.color}; font-size: ${textContainer.style.fontSize}; 
                    font-family: ${textContainer.style.fontFamily}; text-decoration: ${textContainer.style.textDecoration}; 
                    font-style: ${textContainer.style.fontStyle}; font-weight: ${textContainer.style.fontWeight};`;
    
    document.getElementById("css-props").textContent = cssProps;
});