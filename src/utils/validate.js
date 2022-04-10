import { faL } from "@fortawesome/free-solid-svg-icons";

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

export const validateVin = (vin) => {
  if (vin.length == 17) {
    if (!vin.includes("O") || !vin.includes("I") || !vin.includes("Q")) {
      return true;
    }
  }
  return false;
};
export const validateYear = (year) => {
  let numYear = parseInt(year.value, 10);
  let currentYear = new Date().getFullYear() + 1;
  if (numYear < 1900 || numYear > currentYear) return false;
  return true;
};
