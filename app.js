const Bar = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const anchorLink = document.querySelectorAll('anchor-link')

Bar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);

anchorLink.forEach((anchor) => {
    anchor.addEventListener('click', closeSideBar)
})

function openSideBar() {
    sideBar.classList.add('show-side-bar')
}

function closeSideBar() {
    sideBar.classList.remove('show-side-bar')
}