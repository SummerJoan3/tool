import fetch from './fetch';
function post(url, data) {
  return new Promise((resolve, reject) => {
    fetch
      .post(url, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default post;
