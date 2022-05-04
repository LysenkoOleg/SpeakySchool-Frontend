const chilrenBtn = document.getElementById('children');
const childrenOption = document.getElementById('children-option');

let statusBlock = true;

children.addEventListener('click', () => {
    if(statusBlock == true) {
        childrenOption.classList.add('active')
        statusBlock = false
    } else {
        childrenOption.classList.remove('active')
        statusBlock = true
    }
})