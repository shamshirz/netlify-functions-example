import fetch from "node-fetch";

const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const CLIENT_TOKEN = process.env.CLIENT_TOKEN
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'


exports.handler = async (event, context) => {
  return getAccessToken()
  // Next step, use the access Token
};

async function getAccessToken() {
  return fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic ' + CLIENT_TOKEN
    },
    body: 'grant_type=refresh_token&refresh_token=' + REFRESH_TOKEN
  })
    .then(response => response.json())
    .then(data => ({ statusCode: 200, body: data.access_token }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
}