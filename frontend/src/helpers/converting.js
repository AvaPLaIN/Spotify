export const convertMillisecondsToTimeFormat = (milliseconds) => {
  let hours = Math.floor(milliseconds / 1000 / 60 / 60);
  let minutes = Math.floor((milliseconds / 1000 / 60 / 60 - hours) * 60);
  let seconds = Math.floor(
    ((milliseconds / 1000 / 60 / 60 - hours) * 60 - minutes) * 60
  );

  let newTimeFormatAsString = '';
  if (hours < 10 && hours > 0) hours = `0${hours}`;
  if (seconds < 10) seconds = `0${seconds}`;
  //if (minutes < 10) minutes = `0${minutes}`;
  hours > 0
    ? (newTimeFormatAsString = `${hours}:${minutes}:${seconds}`)
    : (newTimeFormatAsString = `${minutes}:${seconds}`);

  return newTimeFormatAsString;
};

export const convertMillisecondsToSeconds = (milliseconds) => {
  return Math.floor(milliseconds / 1000);
};
