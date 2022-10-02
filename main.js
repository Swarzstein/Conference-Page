const speakers = {
  spk1: {
    speakerName: 'Yuseff Zaken',
    profession: 'Particle Physicist from CERN',
    bio: 'Sit facere dolorem nemo porro earum iusto aut tenetur beatae a et enim voluptates sequi ea.',
    picture: 'images/speaker_01.png',
  },
  spk2: {
    speakerName: 'Robert Lee',
    profession: 'profession',
    bio: 'Sit facere dolorem nemo porro earum iusto aut tenetur beatae a et enim voluptates sequi ea.',
    picture: 'images/speaker_02.png',
  },
  spk3: {
    speakerName: 'Haeyeong Kim',
    profession: 'profession',
    bio: 'Sit facere dolorem nemo porro earum iusto aut tenetur beatae a et enim voluptates sequi ea.',
    picture: 'images/speaker_03.png',
  },
  spk4: {
    speakerName: 'Kristin Russeldorf',
    profession: 'profession',
    bio: 'Sit facere dolorem nemo porro earum iusto aut tenetur beatae a et enim voluptates sequi ea.',
    picture: 'images/speaker_04.png',
  },
  spk5: {
    speakerName: 'Helga Oaks',
    profession: 'profession',
    bio: 'Sit facere dolorem nemo porro earum iusto aut tenetur beatae a et enim voluptates sequi ea.',
    picture: 'images/speaker_05.png',
  },
  spk6: {
    speakerName: 'Johnathan Jimenez',
    profession: 'profession',
    bio: 'Sit facere dolorem nemo porro earum iusto aut tenetur beatae a et enim voluptates sequi ea.',
    picture: 'images/speaker_06.png',
  },
};

const moreBtn = document.querySelectorAll('.more-btn');

function loadSpeakers() {
  let Speakers = '';
  let n=0;
  //  eslint-disable-next-line
  for(const spkr in speakers) {
    n += 1;
    const speaker = speakers[spkr];
    if(n<=2){
      Speakers += `
      <div class="card col-md-6 d-flex flex-row align-items-center gap-4 px-4 py-4 borderless">
        <img class="fit-content-y" src="${speaker.picture}" alt="image">
        <div class="card-content">
          <h3>${speaker.speakerName}</h3>
          <span class="color-warn">${speaker.profession}</span>
          <div class="divider-2"></div>
          <p>${speaker.bio}</p>
        </div>
      </div>`;
    } else {
      Speakers += `
      <div class="card col-md-6 d-flex flex-row align-items-center gap-4 px-4 py-4 borderless desktop-only displayable">
        <img class="fit-content-y" src="${speaker.picture}" alt="image">
        <div class="card-content">
          <h3>${speaker.speakerName}</h3>
          <span class="color-warn">${speaker.profession}</span>
          <div class="divider-2"></div>
          <p>${speaker.bio}</p>
        </div>
      </div>`;
    }
    
  }
  document.getElementById('speakers').innerHTML = Speakers;
}

function displayMenu() {
  document.querySelector('#menu-button').classList.toggle('hidden');
  document.querySelector('#phone-menu').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('noscroll');
}

function displaySpeakers() {
  console.log('readed');
  moreBtn.forEach(mbtn =>{
    mbtn.classList.toggle('hidden');
  });
  document.querySelectorAll('.displayable').forEach(dsp =>{
    dsp.classList.toggle('desktop-only');
  });
}

moreBtn.forEach(mbtn =>{
  mbtn.addEventListener('click', displaySpeakers);
});
document.querySelector('#phone-menu > div > button').addEventListener('click', displayMenu);
document.querySelector('#menu-button').addEventListener('click', displayMenu);
document.querySelector('body').addEventListener('load', loadSpeakers);