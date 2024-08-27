const container = document.querySelector(".container");
const gridScale = document.querySelector("#gridScaleInput");
const gridScaleSubmitButton = document.querySelector(".gridScaleSubmitButton");
const preGame = document.querySelector("#preGame");


function getRandomColor(){
    randomNumber = Math.floor(Math.random() * 6);
    switch(randomNumber){
        case 0:
            return "red";
        case 1:
            return "blue";
        case 2:
            return "green";
        case 3:
            return "purple";
        case 4:
            return "orange";
        case 5:
            return "rgb(228, 230, 195)";
    }
}

gridScaleSubmitButton.addEventListener("click", e => {
    if(gridScale.value > 100 || gridScale.value < 0) {
        alert("Please enter valid number");
    }
    else{
        preGame.style = "display: none;";
        for(let i = 0; i < gridScale.value; i++){
            newLine = document.createElement("div");
            newLine.classList.add("column");
            container.appendChild(newLine);
            for(let j = 0; j < gridScale.value; j++){
                newElement = document.createElement("div");
                
                newLine.appendChild(newElement);
            }
        }
        container.style = "display: flex;";
    }

    document.querySelectorAll(".column div").forEach(element => {
        element.addEventListener("mouseover", e => {
            e.target.style = `background-color: ${getRandomColor()}`;
        })
    })
});






