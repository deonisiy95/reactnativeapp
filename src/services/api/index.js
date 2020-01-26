import config from '../../config';
import store from '../../store';

export const sendRequest = (route, data, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    console.log(config.host + route);
    fetch(config.host + route, options)
      .then(async response => {
        let body = await response.json();
        if (response.ok) {
          resolve(body);
        } else {
          reject({
            status: response.status,
            message: body.message || ''
          });
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
