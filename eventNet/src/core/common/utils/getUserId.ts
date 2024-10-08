export function getUserId(): string {
  const user = JSON.parse(localStorage.getItem('user')!)
  return user.sub
}