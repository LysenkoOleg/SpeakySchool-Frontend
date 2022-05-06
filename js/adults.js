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

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdownWrapper) {
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__btn');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    const dropdownListItem = dropdownList.querySelectorAll('.dropdown__list-item');
    const dropdownInput = dropdownWrapper.querySelector('.dropdown__input-hidden');

    dropdownBtn.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    })
    
    dropdownListItem.forEach(function(listItem){
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownBtn.innerText = this.innerText;
            dropdownInput.value = this.dataset.value;
            dropdownList.classList.remove('dropdown__list_active');
        })
    })
    
    document.addEventListener('click', function(e) {
        if(e.target !== dropdownBtn) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    })
})

const footerBtn = document.querySelector('.footer__btn');
const wrapperModal = document.querySelector('.wrapper-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');

footerBtn.addEventListener('click', function() {
    wrapperModal.classList.add('wrapper-modal_active');
    btnCloseModal.addEventListener('click', function() {
        wrapperModal.classList.remove('wrapper-modal_active');
    })
})

const trialBtns = document.querySelectorAll('.trial-btn');
const wrapperModalTrial = document.querySelector('.wrapper-modal-trial');
const btnCloseModalTrial = document.querySelector('.btn-close-modal-trial');

trialBtns.forEach(function(trialBtn) {
    trialBtn.addEventListener('click', function() {
        wrapperModalTrial.classList.add('wrapper-modal-trial_active');
        btnCloseModalTrial.addEventListener('click', function() {
            wrapperModalTrial.classList.remove('wrapper-modal-trial_active');
        })
    })
})