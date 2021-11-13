const SpotifyWebApi = require('spotify-web-api-node');

const login = async (req, res) => {
  const code = req?.body?.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  });

  try {
    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        res.status(200).json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch(() => {
        res.sendStatus(400).json({ message: 'Something went wrong!' });
      });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { login };
