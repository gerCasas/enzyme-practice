const API = process.env.REACT_APP_API_URL;

function getUserById(userId) {
    return fetch(`${API}users/${userId}`)
        .then(_verifyResponse,_handleError);
}

// Verify that the fetched response is JSON
function _verifyResponse(res) {
    let contentType = res.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
        return res.json();
    } else {
        _handleError({ message: 'Response was not JSON'});
    }
}

// Handle fetch errors
function _handleError(error) {
    console.error('An error occurre:', error);
    throw error;
}

// Export ApiService
const ApiService = { getUserById };
export default ApiService;
