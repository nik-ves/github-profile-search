// Search logic
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

  document.querySelector('.github-content').style.display = 'none';
})

