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
      option: ['CANOPY', 'Back End Dev', '2015'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type',
      featuredImage: './images/photo1.png',
      desktopImage: 'images/photo1dt.png',
      technologies: ['html', 'css', 'javascript','ruby'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
    {
      key: 1,
      name: 'Multi-post Stories',
      option: ['FACEBOOK', 'Back End Dev', '2015'],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredImage: './images/photo2.png',
      desktopImage: './images/photo2dt.png',
      technologies: ['html', 'css', 'javascript','ruby'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
    {
      key: 2,
      name: 'FACEBOOK 360',
      option: ['FACEBOOK', 'Full Stack Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      featuredImage: './images/photo3.png',
      desktopImage: './images/photo3dt.png',
      technologies: ['html', 'css', 'javascript', 'ruby'],
      linktoliveversion: 'https://kaylemba.github.io/MyPortfolio2/',
      linktosource: 'https://github.com/KayLemba/MyPortfolio2',
    },
    {
      key: 3,
      name: 'Uber Navigation',
      option: ['Uber', 'Lead Developer', '2018'],
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
         <ul class="card-detail-header-container">
             <li class="card-detail canopy c-js">CANOPY</li>
             <li class="card-detail option choice"><img src="images/bullets.png" alt="bullet"> Back End Dev</li>
             <li class="card-detail option choice"><img src="images/bullets.png" alt="bullet"> 2015</li>
            <li class="dcanopy2_face canopy-js">${option[0]}</li>
            <li class="optiond2_full choice-javas"><img src="images/bullets.png" alt="bullet">${option[1]?option[1]:""}</li>
            <li class="optiond2_full choice-javas"><img src="images/bullets.png" alt="bullet">${option[2]?option[2]:""}</li>
          </ul>

          <div class='modal-img-container' >
            <img src='${width > 1024 ? desktopImage : featuredImage}' alt="modal picture" class="modal-img">
          </div>
          <div class="modal-text">
            <div class="popup-description">
            ${description}
            </div>
            <div>
              <ul class="anchor-div technologies-langu">
                <li><a href="#">${technologies[0]}</a></li>
                <li><a href="#">${technologies[1]?technologies[1] :""}</a></li>
                <li><a href="#">${technologies[2]?technologies[2] :""}</a></li>
                <li><a href="#">${technologies[3]?technologies[3]:""}</a></li>
              </ul>
              <div class="modal-buttons ">
                <a href='${linktoliveversion}' class="source-btn mr source-desktop">
                  See Live
                  <img src="images/Live-icon.svg" class="iconlink" alt="live icon">
                </a>
                <a href='${linktosource}' class="source-btn mr">
                  See Source
                <img src="images/Github-icon.svg" class="iconlink" alt="Git hub">
                </a>
              </div>
            </div>
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
