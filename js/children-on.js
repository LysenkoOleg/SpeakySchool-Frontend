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

const contactsPhoneBtn = document.querySelector('.contacts__phone');
const wrapperModalCall = document.querySelector('.wrapper-modal-call');
const btnCloseModalCall = document.querySelector('.btn-close-modal-call');

contactsPhoneBtn.addEventListener('click', function() {
    wrapperModalCall.classList.add('wrapper-modal-call_active');
    btnCloseModalCall.addEventListener('click', function() {
        wrapperModalCall.classList.remove('wrapper-modal-call_active');
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
                addForms.forEach(function(addForm) {
                    addForm.style.background = 'url(/img/children_on/add_form.png) no-repeat right';
                    addForm.style.backgroundColor = '#FFFBED';
                })
                modalWindows.forEach(function(modalWindow) {
                    modalWindow.style.background = 'url(/img/children_on/add_form.png) no-repeat right';
                    modalWindow.style.backgroundColor = '#FFFBED';
                })
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

const subTitleUpItems = document.querySelectorAll('.subtitle-up__item');
const subTitleDown = document.querySelector('.subtitle-down');
const subTitleDowns = document.querySelectorAll('.subtitle-down__item');
const programs = document.querySelectorAll('.programs');

function changeBlock(el) {
    programs.forEach(function(program) {
        program.classList.remove('js_active');
        if(program.dataset.time == el) {
            program.classList.add('js_active');
        }
        if(program.dataset.value == el) {
            program.classList.add('js_active');
        }
    })
}

subTitleUpItems.forEach(function(subItem) {
    subItem.addEventListener('click', function(e) {
        let currSubTitle = e.target.dataset.value;
        subTitleUpItems.forEach(function(item) {
            item.classList.remove('js_active')
        })
        e.target.classList.add('js_active');
        if(currSubTitle == subTitleDown.dataset.value) {
            subTitleDown.classList.add('js_active');
            changeBlock(subItem.dataset.value)
        } else {
            subTitleDown.classList.remove('js_active');
            changeBlock(subItem.dataset.value)
        }
    })
})
subTitleDowns.forEach(function(downItem) {
    downItem.addEventListener('click', function(e) {
        let currSubItem = e.target.dataset.value;
        subTitleDowns.forEach(function(item) {
            item.classList.remove('js_active');
            changeBlock(currSubItem);
        })
        if(downItem.dataset.value == currSubItem) {
            downItem.classList.add('js_active');
        }
    })
})
