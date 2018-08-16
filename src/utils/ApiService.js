const API = process.env.REACT_APP_API_URL;

function getUserById(userId) {
    return fetch(`${API}users/${userId}`)
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        console.log('fetch failed', response.statusText)
      }
    })
    .catch((ex) => {
      throw new Error('fetch failed' + ex)
    });
}

const ApiService = { getUserById };
export default ApiService;
