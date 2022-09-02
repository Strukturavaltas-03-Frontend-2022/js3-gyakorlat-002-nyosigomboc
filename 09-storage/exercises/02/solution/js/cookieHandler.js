const cookieHandler = {
  getAll() {
    return document.cookie.split(';').reduce((prev, curr) => {
      const [full, key, value] = /^[ ]*([^=]+)=([^;]*)/.exec(curr);
      prev[key] = value;
      return prev;
    }, {});
  },
  toSessionStorage() {
    Object.entries(this.getAll()).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  },
  flush() {
    Object.keys(this.getAll()).forEach((key) => {
      document.cookie = `${key}=; expires=${new Date(0).toUTCString()}`;
    });
  },
};

export default cookieHandler;
