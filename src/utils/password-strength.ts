export function calculatePasswordStrength(password: string) {
  if (password === "") return 0;
  const hasUpperCase = /(?=.*[A-Z])/;
  const hasLowerCase = /(?=.*[a-z])/;
  const hasNumber = /(?=.*[0-9])/;
  const hasSymbols = /([^A-Za-z0-9])/;

  let passwordComoplexity = 0;

  if (password.length >= 18) passwordComoplexity += 4;
  else if (password.length >= 14 && password.length < 18)
    passwordComoplexity += 3;
  else if (password.length > 8 && password.length < 14)
    passwordComoplexity += 2;
  else passwordComoplexity += 1;

  if (hasUpperCase.test(password)) passwordComoplexity += 2;
  if (hasLowerCase.test(password)) passwordComoplexity += 2;
  if (hasNumber.test(password)) passwordComoplexity += 2;
  if (hasSymbols.test(password)) passwordComoplexity += 2;

  const score = Math.floor(passwordComoplexity * 2);

  if (score <= 12) return 1;
  if (score <= 16) return 2;
  if (score <= 20) return 3;
  if (score <= 24) return 4;

  return 0;
}
