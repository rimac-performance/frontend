export const setToken = (tokenString) => {
  console.log("setting new user token to:");
  console.log(tokenString);
  sessionStorage.setItem("revToken", tokenString);
};

export const getToken = () => {
  let tokenString = sessionStorage.getItem("revToken");
  return tokenString ? tokenString : "";
};

export const clearToken = () => {
  sessionStorage.removeItem("revToken");
};
