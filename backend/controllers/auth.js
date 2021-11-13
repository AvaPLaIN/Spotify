const SpotifyWebApi = require('spotify-web-api-node');

const login = async (req, res) => {
  try {
    const code = req?.body?.code;
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    });

    const data = await spotifyApi.authorizationCodeGrant(code);
    if (data) {
      const { access_token, refresh_token, expires_in } = data?.body;
      res.status(200).json({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      });
    } else {
      console.log('auth.js_login_data_!data');
      res.status(500).json({ message: 'Something went wrong!' });
    }
  } catch (error) {
    console.log('auth.js_login_error', error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

const refreshJwtToken = async (req, res) => {
  try {
    const refreshToken = req?.body?.refreshToken;
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      redirectUri: process.env.SPOTIFY_REDIRECT_URI,
      refreshToken,
    });

    const data = await spotifyApi.refreshAccessToken();
    if (data) {
      const { access_token, expires_in } = data?.body;
      res.status(200).json({
        accessToken: access_token,
        expiresIn: expires_in,
      });
    } else {
      console.log('auth.js_refreshJwtToken_data_!data');
      res.status(500).json({ message: 'Something went wrong!' });
    }
  } catch (error) {
    console.log('auth.js_login_error', error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { login, refreshJwtToken };
