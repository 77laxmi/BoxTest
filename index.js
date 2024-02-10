

function toggleBox(event, boxNumber) {
    const clickedBox = event.currentTarget;
    const allBoxes = document.querySelectorAll('.box');
    
    allBoxes.forEach(box => {
        if (box !== clickedBox) {
            box.classList.remove('expanded');
            box.classList.add('collapsed');
        }
    });

    clickedBox.classList.toggle('collapsed');
    clickedBox.classList.toggle('expanded');
}