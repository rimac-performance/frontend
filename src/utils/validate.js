export const validate = (text) => {
  return text !== "";
};

export const validatePass = (pass1, pass2) => {
  return pass1 === pass2;
};

export const validatePermission = (role) => {
  let roleNum = parseInt(role);
  let roles = [1, 2, 3];
  return roles.includes(roleNum);
};
