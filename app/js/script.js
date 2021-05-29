// SEARCH LOGIC
let btn = document.querySelector('.btn--search');

btn.addEventListener('click', (name) => {
  let inputText = document.getElementById('input-text').value;

  const ghProfile = `https://api.github.com/users/${inputText}`;
  const ghRepositories = `https://api.github.com/users/${inputText}/repos?page=1`;

  // PROFILE
  fetch(ghProfile).then((responseProfile) => {
    return responseProfile.json();
  }).then((profileData) => {
    let profile = '';

    profile = 
    `
    <img class="github-profile__image" src="${profileData.avatar_url}" id="user-img">

    <h1 class="github-profile__name heading-1">${profileData.name}</h1>

    <p class="github-profile__user-name">${profileData.login}</p>

    <ul class="github-profile__social-links">
      <li class="github-profile__social-links--item"><i class="fas fa-building"></i> ${profileData.company}</li>
      <li class="github-profile__social-links--item"><i class="fas fa-globe-europe"></i> ${profileData.location}</li>
      <li class="github-profile__social-links--item"><i class="fab fa-twitter"></i> ${profileData.twitter_username}</li>
    </ul>

    <ul class="github-profile__followers">
      <li class="github-profile__followers--item">Followers: <span>${profileData.followers}</span></li>
      <li class="github-profile__followers--item">Following: <span>${profileData.following}</span></li>
      <li class="github-profile__followers--item">Repositories: <span>${profileData.public_repos}</span>&nbsp;</li>
    </ul>
    `
    document.querySelector('.github-profile').innerHTML = profile;
  })

  // REPOSITORIES
  fetch(ghRepositories).then((responseRepository) => {
    return responseRepository.json();
  }).then((repositoryData) => {

    let repository = '';
    repositoryData.forEach((element) => {

      if (element.description === null) {
        element.description = '';
      }

      repository += 
      `
      <a href="${element.html_url}" target="_blank" id="github-link">
        <div class="github-repositories__card">

          <h4 class="github-repositories__card--name heading-4">${element.name}</h4>
              
          <p class="github-repositories__card--description">${element.description}</p>

          <ul class="github-repositories__list">
            <li class="github-repositories__list--item"><i class="fas fa-star github-repositories__icon"></i> ${element.stargazers_count}</li>
            <li class="github-repositories__list--item"><i class="fas fa-code-branch github-repositories__icon"></i> ${element.forks_count}</li>
            <li class="github-repositories__list--item"><i class="fas fa-eye github-repositories__icon"></i> ${element.watchers_count}</li>
          </ul>
        </div>
      </a>
      `
      document.querySelector('.github-repositories__row').innerHTML = repository;
    })
  })

  document.querySelector('.github-content').style.display = 'none';
})

// SLIDER LOGIC
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
