const Bar = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const anchorLink = document.querySelectorAll('.anchor-link')
const Body = document.querySelector('body');

const modalButton = document.querySelectorAll('.btns');
const cancelModal = document.querySelector('.cancels');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const width = window.innerWidth;
const cards = [
    {
      key: 0,
      name: 'Tonic',
      option: ['Canopy', 'Back end dev', '2015'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredImage: './images/photo1.png',
      desktopImage: 'images/photo1dt.png',
      technologies: ['html', 'css', 'javascript','Ruby'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
    {
      key: 1,
      name: 'Multi-post Stories',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredImage: './images/photo2.png',
      desktopImage: './images/photo2dt.png',
      technologies: ['html', 'css', 'javascript'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
    {
      key: 2,
      name: 'FACEBOOK 360',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: './images/photo3.png',
      desktopImage: './images/photo3dt.png',
      technologies: ['html', 'css', 'javascript'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
    {
      key: 3,
      name: 'Uber Navigation',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: './images/photo4.png',
      desktopImage: './images/photo4dt.png',
      technologies: ['html', 'css', 'javascript', 'git hub', 'ruby','Bootstrap'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
  ];
  const Openpopup = ({ 
      name, description, featuredImage, desktopImage, technologies, linktoliveversion, linktosource, option
  }) => () => {
    let displayModal = '';
    modal.classList.add('show-modal');
    displayModal += `
         <div class="modal-head">
          <h3 class="modal-title">${name}</h3>
         </div>
         <ul class="cards-container">
            <li class="card-detail canopy">${option[0]}</li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet">${option[1]?option[1]:""} </li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet">${option[2]?option[2]:""}</li>
            <li class="card-detail dcanopy2_face">CANOPY</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> Back End Dev</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> 2015</li>
          </ul>

          <div class='modal-img-container' >
            <img src='${width > 1024 ? desktopImage : featuredImage}' alt="modal picture" class="modal-img">
          </div>
          <div class="modal-text">
           ${description}
          </div>
          <ul class="anchor-div technologies-langu">
          <li><a href="#">${technologies[0]}</a></li>
          <li><a href="#">${technologies[1]}</a></li>
          <li><a href="#">${technologies[2]}</a></li>
          <li><a href="#">${technologies[3] }</a></li>
          </ul>
          <div class="modal-buttons ">
            <a href='${linktoliveversion}' class="source-btn mr">
              See Live
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="white"/>
                </svg>
            </a>
            <a href='${linktosource}' class="source-btn mr">
              See Source
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="white"/>
                </svg>
            </a>
          </div>
  
      `;
    modalInner.innerHTML = displayModal;
  };
  function closePopup() {
    modal.classList.remove('show-modal');
 }
  
  modalButton.forEach((button, i) => {
    button.addEventListener('click', Openpopup(cards[i]));   
  })

Bar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
cancelModal.addEventListener('click', closePopup);

anchorLink.forEach((anchor) => {
    anchor.addEventListener('click', closeSideBar)
})

function openSideBar() {
    sideBar.classList.add('show-side-bar')
    Body.classList.add('noscroll')
}

function closeSideBar() {
    sideBar.classList.remove('show-side-bar')
    Body.classList.remove('noscroll')

}
