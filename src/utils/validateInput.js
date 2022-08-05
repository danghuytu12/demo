export function validateName() {
  return [
    v => !!v || "Name is required",
    v => (v && v.length <= 50) || "Name must be less than 50 characters"
  ];
}

export function validateEmail() {
  return [
    v => !!v || "E-mail is required",
    v => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ];
}
export function validateAge() {
  return [
    v =>
      (!isNaN(parseFloat(v)) && v >= 0 && v <= 150) ||
      "Age has to be between 0 and 150"
  ];
}
