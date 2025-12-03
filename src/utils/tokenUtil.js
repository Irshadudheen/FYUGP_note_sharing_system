import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "accessToken";

export const TokenUtils = {
  setToken: (token, days = 7) => {
    Cookies.set(TOKEN_KEY, token, {
      expires: days,
      secure: true,
      sameSite: "Strict",
    });
  },

  getToken: () => {
    return Cookies.get(TOKEN_KEY);
  },

  removeToken: () => {
    Cookies.remove(TOKEN_KEY);
  },
};

export const decodeToken = () => {
  const token = TokenUtils.getToken();
  let user = null;
  if (token) {
    try {
      user = jwtDecode(token);
      console.log('decoded user',user)
    } catch (err) {
      console.error("Invalid token", err);
    }
  }
  return user;
};


export async function getGoogleUserInfo(accessToken) {
  try {
    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Google API error: ${res.status}`);
    }

    const userInfo = await res.json();
    return userInfo;
  } catch (error) {
    console.error("Failed to fetch Google user info:", error.message);
    return null;
  }
}