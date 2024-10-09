export function getUser(): { name: string; sub: string; userName: string } {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user;
}
