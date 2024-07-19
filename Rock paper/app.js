let userscore = 0
let compscore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ['rock','paper','scissors']
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame = () => {
    console.log('game was draw.')
    msg.innerText = 'Game was draw. play again.'
    msg.style.backgroundColor = '#081b31'
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userscore++
        userScorepara.innerText = userscore
        console.log('you win');
        msg.innerText = `You won. your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    } else{
        compscore++
        compScorepara.innerText = compscore
        console.log('you lose');
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) =>{
    console.log('user Choice =',userChoice);
    //generate computer choice-> modular
    const compChoice = genCompChoice()
    console.log('comp choice = ',compChoice)

    if(userChoice === compChoice){
        //draw game
        drawGame()
    } else {
        let userWin = true
        if(userChoice === 'rock'){
            //scissors, paper
            userWin=compChoice === 'paper' ? false : true
        } else if(userChoice === 'paper'){
            //rock , scissors
            userWin = compChoice === 'scissors' ? false : true
        }else{
            //rock paper
            userWin = compChoice === 'rock' ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id')
        // console.log('choice was clicked',userChoice)
        playGame(userChoice)
    })
})