import Twitch from 'twitch.tv-api';

export default new Twitch({
  id: process.env.REACT_APP_TWITCH_ID,
  secret: process.env.REACT_APP_TWITCH_SECRET,
});