import {sendRequest} from '../../services/api';

export default class Api {
  static login = (email, password) => {
    return sendRequest('signin', {email, password}, 'POST');
  };
}
