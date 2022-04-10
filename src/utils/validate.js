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
    if (isNumber(vin.charAt(0)) && isNumber(vin.charAt(8))) {
      if (!vin.includes("O") && !vin.includes("I") && !vin.includes("Q")) {
        return true;
      } else {
        console.log(
          `O: ${vin.includes("O")} I: ${vin.includes("I")} Q: ${vin.includes(
            "Q"
          )}`
        );
      }
    } else {
      console.log("The first or ninth character is not a number");
    }
  } else {
    console.log("vin is " + vin.length + "/17 characters");
  }
  return false;
};

function isNumber(char) {
  return Number.isInteger(parseInt(char));
}
