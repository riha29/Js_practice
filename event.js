function darkMe() {
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
}

function normalMe() {
    document.body.style.color='black'
    document.body.style.backgroundColor='lightgrey'
}

function handleJustFunctionClick() {
    const clickingMethod = document.getElementById('clicking-method')
    clickingMethod.innerText= 'set by using function'
}