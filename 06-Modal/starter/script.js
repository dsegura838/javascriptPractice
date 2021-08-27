'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);    

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//passing in event to function
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
//adding a comment to feature-readme branch
console.log('Hello there. I am testing git branches');
