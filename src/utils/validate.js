export const validate = (text) => {
  text !== ""
    ? console.log(text + " validated")
    : console.log(text + " invalidated");
  return text !== "";
};

export const validatePass = (pass1, pass2) => {
  pass1 === pass2
    ? console.log(pass2 + " validated")
    : console.log(pass2 + " invalidated");
  return pass1 === pass2;
};
