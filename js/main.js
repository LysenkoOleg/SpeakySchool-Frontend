const chilrenBtn = document.getElementById('children');
const childrenOption = document.querySelector('.children-option');

chilrenBtn.addEventListener('click', () => {
    childrenOption.classList.toggle('active');
    document.addEventListener('click', function(e) {
        if(e.target !== chilrenBtn) {
            childrenOption.classList.remove('active');
        }
    })
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

const contactsPhoneBtns = document.querySelectorAll('.contacts__phone');
const wrapperModalCall = document.querySelector('.wrapper-modal-call');
const btnCloseModalCall = document.querySelector('.btn-close-modal-call');

contactsPhoneBtns.forEach(function(contactsPhoneBtn) {
    contactsPhoneBtn.addEventListener('click', function() {
        wrapperModalCall.classList.add('wrapper-modal-call_active');
        btnCloseModalCall.addEventListener('click', function() {
            wrapperModalCall.classList.remove('wrapper-modal-call_active');
        })
    })
})

const addFormSubTitles = document.querySelectorAll('.add-form__subtitle');
const adultsBlocks = document.querySelectorAll('.foradults');
const childrenBlocks = document.querySelectorAll('.forchildren');
const addForms = document.querySelectorAll('.add-form');
const modalWindows = document.querySelectorAll('.modal-window-trial');

function changeBlock(el) {
    adultsBlocks.forEach(function(adultsBlock) {
        if(el == adultsBlock.dataset.value) {
            adultsBlock.classList.add('js_active');
            childrenBlocks.forEach(function(childrenBlock) {
                childrenBlock.classList.remove('js_active');
            })
        } else {
            childrenBlocks.forEach(function(childrenBlock) {
                adultsBlock.classList.remove('js_active');
                childrenBlock.classList.add('js_active');
            })
        }
    })
}

addFormSubTitles.forEach(function(addFormSubTitle) {
    addFormSubTitle.addEventListener('click', function(e) {
        for(let i = 0; i < addFormSubTitle.children.length; i++) {
            let currSubTitle = e.target.dataset.value
            addFormSubTitle.children[i].classList.remove('js_active');
            if(addFormSubTitle.children[i].dataset.value == currSubTitle) {
                addFormSubTitle.children[i].classList.add('js_active');
                changeBlock(currSubTitle);
            }
        }
    })
})

const radios = document.querySelectorAll('.radio');
const descriptions = document.querySelectorAll('.description');

radios.forEach(function(radio) {
    radio.addEventListener('click', function(e) {
        let currRadio = e.target.dataset.value;
        descriptions.forEach(function(description) {
            description.classList.remove('js_active')
            if(description.dataset.value == currRadio) {
                description.classList.add('js_active');
            }
        })
    })
})

const burgerOpenBtn = document.querySelector('.burger');
const burgerCloseBtn = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.burger-menu');

burgerOpenBtn.addEventListener('click', function() {
    burgerMenu.classList.add('js_active');
})
burgerCloseBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('js_active');
})
