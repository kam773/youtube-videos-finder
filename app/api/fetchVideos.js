import { fetchVideosSuccess } from 'actions';

const fetchVideos = () => (dispatch) => {
  const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=google&type=video&maxResults=6&key=AIzaSyDwn1T4zBSOOn9ZCY1eo8gdOhO1ONsk4zA';
  return fetch(url)
    .then(res => res.json())
    .then(res => dispatch(fetchVideosSuccess(res)))
    .catch(err => alert('Something wrong, try again'));
};

export default fetchVideos;