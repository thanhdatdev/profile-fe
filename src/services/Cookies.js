import Cookies from 'universal-cookie';

export function setCookie(name, value, days ) {
  const cookies = new Cookies();
  let expires;
  if (days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    expires = date;
  }

  cookies.set(name, value, { path: '/', expires });

}
export function getCookie(name) {
  const cookies = new Cookies();
  return cookies.get(name);
}
export function getCookieFromString(name ,cookiesData){
  const cookies = new Cookies(cookiesData);
  return cookies.get(name) || null;
}
export function deleteCookie(name, path = '/', domain){
  const cookies = new Cookies();
  if (cookies.get(name)) {
    cookies.remove(name, { path, domain });
  }
}
