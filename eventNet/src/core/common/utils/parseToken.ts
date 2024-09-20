export function parseToken(token: string) {
  const base64Url = token.split('.')[1];
  const parsedToken = JSON.parse(atob(base64Url));
  return parsedToken
}
