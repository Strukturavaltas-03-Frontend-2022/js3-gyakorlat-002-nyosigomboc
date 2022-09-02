const setCookie = (str) => {
  document.cookie = `token=${str}; expires=${new Date(Date.now() + 15 * 60 * 1000).toUTCString()}; path=/`;
};

export default setCookie;
