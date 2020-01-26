export const setTokens = ({token, refreshToken}) => ({
  type: 'SET_TOKENS',
  payload: {
    token,
    refreshToken
  }
});
