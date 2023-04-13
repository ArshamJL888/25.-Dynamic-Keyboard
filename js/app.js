// import tags
let textSection = document.querySelector('.text');
let buttons = document.querySelectorAll('.btn');
let capsOn = document.querySelector('.capsOn')
let isOn = false;


//Events
document.body.addEventListener('keydown', keyboardHandler);
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let key = event.target.id;
        event.target.classList.add('clickMode');
        setTimeout(function () {
            event.target.classList.remove('clickMode')
        }, 0.2);
        console.log(event);
        if (key === 'Backspace') {
            textSection.textContent = textSection.textContent.slice(0, textSection.textContent.length - 1);
        }

        else if (key != 'ShiftLeft' && key != 'ShiftRight' && key != 'ControlLeft' && key != 'Tab' && key != 'ControlRight' && key != 'AltLeft' && key != 'CapsLock' && key != 'AltRight' && key != 'Enter') {
            textSection.textContent += key.slice(key.length - 1);
        }
        else if (key === 'CapsLock') {
            isOn = !isOn
            if (isOn) {
                capsOn.style.backgroundColor = 'green';
            }
            else {
                capsOn.style.backgroundColor = 'white';
            }
        }
    })
})

// Functions
function keyboardHandler(event) {
    let key = event.code;
    console.log(event)
    console.log(key);

    buttons.forEach(function (btn) {
        if (btn.id === key) {
            btn.classList.add('clickMode')
            setTimeout(function () {
                btn.classList.remove('clickMode')
            }, 0.2);
        }
    })

    if (key === 'Backspace') {
        textSection.textContent = textSection.textContent.slice(0, textSection.textContent.length - 1);
    }
    else if (event.key != 'Shift' && event.key != 'Control' && event.key != 'Alt' && event.key != 'Enter' && event.key != 'CapsLock' && event.key != 'Tab') {
        textSection.textContent += event.key;
    }
    else if (event.key === 'CapsLock') {
        isOn = !isOn
        if (isOn) {
            capsOn.style.backgroundColor = 'green';
        }
        else {
            capsOn.style.backgroundColor = 'white';
        }
    }

}