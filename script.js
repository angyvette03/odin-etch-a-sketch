
const container = document.querySelector(".container");

function editGrid(number){
    for(i = 1; i <=number; i++){
        const vertical = document.createElement('div');
        vertical.classList.add("vertical")
        for(j = 1; j<=number; j++){
            const indiv = document.createElement('div');
            indiv.classList.add("indiv")
            vertical.appendChild(indiv);
        }
        container.appendChild(vertical);
    }
    const squares = document.querySelectorAll(".indiv")
    squares.forEach(square => square.addEventListener("mouseover", function changeColor(){
        square.style.backgroundColor= getRandomColor();
        // square.style.opacity += '0.1'
    }));
    document.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            squares.forEach(square => {square.setAttribute('style', 'background-color: white');})
        }
    })
}

function getRandomColor(){
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}



const editButton = document.querySelector(".editButton");
editButton.addEventListener('click', function(){
    let userInput = prompt("Please input grid size.", 16);
    // let popup = document.querySelector()
    while(userInput < 0 || userInput > 101){
        userInput = prompt("Please input grid size.");
    }
    if(userInput == null){
        return
    }
    container.textContent = '';
    editGrid(userInput);
    console.log(userInput);
})




