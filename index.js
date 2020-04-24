function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}


function onDragOver(event) {
    event.preventDefault()
}

function onDrop(event) {
    event.preventDefault()

    for (x of dragbox) {
        const id = event
            .dataTransfer
            .getData('text');

        const draggableElement = document.getElementById(id);
        const dropzone = event.target;

        dropzone.style.backgroundColor = getComputedStyle(draggableElement).getPropertyValue('background-color')
        dropzone.textContent = getComputedStyle(dropzone).getPropertyValue('background-color')

    }
}


let dragbox = document.querySelectorAll('.draggable')
let arr = Array.from(dragbox)
for (i = 0; i < arr.length; i++) {
    arr[i].setAttribute('draggable', true)
    arr[i].addEventListener('dragstart', onDragStart)
    let idCount = 1
    arr[i].setAttribute('id', 'qqqq' + (idCount + i))

}

let dropBox = document.querySelectorAll('.box')

for (let x of dropBox) {
    x.addEventListener('dragover', onDragOver)
    x.addEventListener('drop', onDrop)
}

// -------------
// random colors to test the drag and drop functionality
for (x of dragbox) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    x.style.backgroundColor = `rgb(${r},${g},${b})`
}

document.body.onkeypress = function(e) {
        e.preventDefault()
        if (e.keyCode == 32) {
            arr.map(function(a) {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)

                a.style.backgroundColor = `rgb(${r},${g},${b})`
            })
        }
    }
    // -------------