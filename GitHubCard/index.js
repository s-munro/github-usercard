import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')


function cardMaker(data) {
  const title = document.createElement('h2')
  const image = document.createElement('img')
  const name = document.createElement('h2');
  const newCard = document.createElement('div')

  newCard.appendChild(title)
  newCard.appendChild(name)
  newCard.appendChild(image)

  title.textContent = data.login
  name.textContent = data.name
  image.src = data.avatar_url

  cards.appendChild(newCard)
  console.log(newCard);

}

axios.get('https://api.github.com/users/s-munro').then(res => {
  const data = res.data
  cardMaker(data);
  console.log(res);

}).catch(err => {
  console.log(err)
})

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['CScori', 'adamrappaport', 'Benaiah-Varner', 'Matte-matt', 'roberttierie'];

followersArray.map(item => {
  axios.get(`https://api.github.com/users/${item}`).then(res => {

    // const data = res.data
    createNewCard(res);
    console.log(res);

  }).catch(err => {

    console.log(err)
  })



})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/
function createNewCard(obj) {

  const card = document.createElement('div')
  card.classList.add('card')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  const h3Name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.appendChild(image)
  card.appendChild((cardInfo))
  cardInfo.appendChild(h3Name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  console.log(card);

  h3Name.textContent = obj.data.login
  username.textContent = obj.data.name
  image.src = obj.data.avatar_url
  location.textContent = obj.data.location
  followers.textContent = obj.data.followers
  following.textContent = obj.data.following
  bio.textContent = obj.data.bio


  cards.appendChild(card);
}
/*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/