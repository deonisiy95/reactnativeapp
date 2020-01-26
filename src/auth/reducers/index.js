export const initialState = () => ({
  token: null,
  refreshToken: null
});

export default (state = initialState(), {type, payload}) => {
  switch (type) {
    case 'SET_TOKENS':
      return {
        token: payload.token,
        refreshToken: payload.refreshToken
      };

    default:
      return state;
  }
};
