const cookieHandler = {
  getAll() {
    return document.cookie.split(';').reduce((prev, curr) => {
      const [, key, value] = /^[ ]*([^=]+)=([^;]*)/.exec(curr);
      const newObj = prev;
      newObj[key] = value;
      return newObj;
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
