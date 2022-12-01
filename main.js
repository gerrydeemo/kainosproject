function starClick(star) {
    document.getElementById(star).style.color = "yellow"
    if (star === "star5") {
        document.getElementById("star5").style.color = "yellow"
        document.getElementById("star4").style.color = "yellow"
    }
    if (star === "star4") {
        document.getElementById("star4").style.color = "yellow"
        document.getElementById("sta").style.color = "yellow"
    }
}

function addReview() {
    event.preventDefault()
    let colorValue = document.getElementById("textbox").value
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.innerHTML = colorValue
    
    ul.appendChild(li)
    document.getElementById("textbox").value = ""
}
