import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/diego-fischer').then((res) => {
  document.querySelector('.cards').appendChild(createCard(res))
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
		ok
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

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
]

followersArray.forEach((el) => {
  axios
    .get(`https://api.github.com/users/${el}`)
    .then((res) => {
      document.querySelector('.cards').appendChild(createCard(res))
    })
    .catch((err) => {
      console.error(err)
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
		ok

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

function createCard(obj) {
  const divCard = document.createElement('div')
  divCard.classList.add('card')

  const img = document.createElement('img')
  img.setAttribute('src', obj.data.avatar_url)
  divCard.appendChild(img)

  const divCardInfo = document.createElement('div')
  divCardInfo.classList.add('card-info')
  divCard.appendChild(divCardInfo)

  const h3Name = document.createElement('h3')
  h3Name.classList.add('name')
  h3Name.innerText = obj.data.name
  divCardInfo.appendChild(h3Name)

  const pUserName = document.createElement('p')
  pUserName.classList.add('username')
  pUserName.innerText = obj.data.login
  divCardInfo.appendChild(pUserName)

  const pLocation = document.createElement('p')
  pLocation.innerText = `Location: ${obj.data.location}`
  divCardInfo.appendChild(pLocation)

  const pProfile = document.createElement('p')
  pProfile.innerHTML = `Profile:
	<a href=${obj.data.url}>${obj.data.url}</a>`
  pProfile.setAttribute('href', obj.data.url)
  divCardInfo.appendChild(pProfile)

  const pFollowers = document.createElement('p')
  pFollowers.innerText = `Followers: ${obj.data.followers}`
  divCardInfo.appendChild(pFollowers)

  const pFollowing = document.createElement('p')
  pFollowing.innerText = `Following: ${obj.data.following}`
  divCardInfo.appendChild(pFollowing)

  const pBio = document.createElement('p')
  pBio.innerText = `Bio: ${obj.data.bio}`
  divCardInfo.appendChild(pBio)

  return divCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
