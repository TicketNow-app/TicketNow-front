import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = React.createContext({} as any);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = React.useState('');
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "983780967006-56d0uoo02lutmlf3iibjs08s89u21uvf.apps.googleusercontent.com",
    iosClientId: "983780967006-56d0uoo02lutmlf3iibjs08s89u21uvf.apps.googleusercontent.com",
    expoClientId: "983780967006-d5e74ku8bjn846r6a8jpn9u06h9rgvmd.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  React.useEffect(() => {
    setMessage(response?.type);
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response, accessToken]);

  async function getUserData() {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const signIn = async () => {
    await promptAsync();
  };

  const signOut = () => {
    setAccessToken(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        userInfo,
        signIn,
        signOut,
        getUserData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
