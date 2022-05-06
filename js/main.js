const chilrenBtn = document.getElementById('children');
const childrenOption = document.getElementById('children-option');

let statusBlock = true;

chilrenBtn.addEventListener('click', () => {
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

const trialBtn = document.querySelector('.trial-btn');
const wrapperModalTrial = document.querySelector('.wrapper-modal-trial');
const btnCloseModalTrial = document.querySelector('.btn-close-modal-trial');

trialBtn.addEventListener('click', function() {
    wrapperModalTrial.classList.add('wrapper-modal-trial_active');
    btnCloseModalTrial.addEventListener('click', function() {
        wrapperModalTrial.classList.remove('wrapper-modal-trial_active');
    })
})

const contactsPhoneBtn = document.querySelector('.contacts__phone');
const wrapperModalCall = document.querySelector('.wrapper-modal-call');
const btnCloseModalCall = document.querySelector('.btn-close-modal-call');

contactsPhoneBtn.addEventListener('click', function() {
    wrapperModalCall.classList.add('wrapper-modal-call_active');
    btnCloseModalCall.addEventListener('click', function() {
        wrapperModalCall.classList.remove('wrapper-modal-call_active');
    })
})