const exprRegular = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-z]+[0-9]+$/,
  dni: /^\d{8}$/,
  nameSurname: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
  telephone: /^\d{9}$/,
  digit: /^[0-9a-zA-Z-.À-ÿ\s]+$/,
  letter: /^[a-zA-Z]+$/,
};

export default exprRegular;
