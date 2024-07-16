import React, { useState } from "react";
import { Button, Grid, Modal, Paper, TextField } from "@mui/material";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
interface User {
  name: string;
  // Add any other user properties here
}

interface Props {
  onLogin: (user: User) => void;
}
const bt = {
  bgcolor: "#D63E38",
  "&:hover": {
    bgcolor: "#D63E38", // Change to the desired color
  },
};

interface GoogleSignInResponse {
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}
const AuthenticationModel: React.FC<Props> = ({ onLogin }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post<{ token: string; user: User }>(
        "http://localhost:6001/users/signin",
        {
          email,
          password,
        }
      );
      const { token, user } = response.data;
      Cookies.set("token", token, {
        expires: new Date(Date.now() + 10 * 60 * 1000),
      });
      Cookies.set("user", JSON.stringify(user), {
        expires: new Date(Date.now() + 10 * 60 * 1000),
      });
      onLogin(user); // Notify parent component about successful login
      handleClose();
      //   router.push("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error (e.g., display an error message to the user)
    } finally {
      setLoading(false);
    }
  };

  async function googleSignIn(
    credential: string | undefined
  ): Promise<GoogleSignInResponse> {
    try {
      setLoading(true);
      const response = await axios.post<GoogleSignInResponse>(
        "http://localhost:6001/users/googleSignIn",
        {
          token: credential,
        }
      );

      const { token, user } = response.data;
      Cookies.set("token", token, {
        expires: new Date(Date.now() + 10 * 60 * 1000),
      });
      Cookies.set("user", JSON.stringify(user), {
        expires: new Date(Date.now() + 10 * 60 * 1000),
      });
      onLogin(user); // Notify parent component about successful login
      handleClose();
      window.location.href = '/';
      return response.data;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        console.error("Axios error:", error.response?.data);
      } else {
        // Handle non-Axios errors
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  }

  return (
    <div>
      <Button
        sx={bt}
        variant="contained"
        onClick={handleOpen}
        startIcon={
          //   <Image src="/WhiteLogoSmall.png" alt="logo" width={25} height={28} />
          <img src="/WhiteLogoSmall.png" alt="logo" width={25} height={28} />
        }
      >
        Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Grid container justifyContent="center" alignItems="center">
          <Paper className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>{!isSignUp ? "Log In" : "Register"}</h2>
            </div>
            <div className={styles.tabPanelContent}>
              {isSignUp && (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <TextField
                        sx={{ ml: 8, mb: 2, mt: 2, width: "40ch" }}
                        id="username"
                        label="Username"
                        variant="outlined"
                      />
                    </div>
                    <div>
                      <TextField
                        sx={{ ml: 8, mb: 2, width: "40ch" }}
                        id="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                      />
                    </div>
                    <div>
                      <TextField
                        sx={{ ml: 8, width: "40ch" }}
                        id="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                      />
                    </div>
                  </form>
                  <Button type="submit" className={styles.submitBtn} fullWidth>
                    Register
                  </Button>
                  <div className={styles.divider}>Or</div>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse?.credential);
                      const cred = credentialResponse?.credential;
                      googleSignIn(cred);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  ;
                </div>
              )}
              {!isSignUp && (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <TextField
                        sx={{ ml: 8, mb: 2, mt: 2, width: "40ch" }}
                        id="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        sx={{ ml: 8, width: "40ch" }}
                        id="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className={styles.forgotPassword}>
                      Forgot password?
                    </div>

                    <Button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                  <div className={styles.divider}>Or</div>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse?.credential);
                      const cred = credentialResponse?.credential;
                      googleSignIn(cred);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              )}

              {!isSignUp && (
                <div className={styles.toggleText}>
                  Dont have an account ?&nbsp;
                  <span
                    className={styles.toggleClickableText}
                    onClick={toggleSignUp}
                  >
                    Register
                  </span>
                </div>
              )}
              {isSignUp && (
                <div className={styles.toggleText}>
                  Already have an account ?&nbsp;
                  <span
                    className={styles.toggleClickableText}
                    onClick={toggleSignUp}
                  >
                    Login
                  </span>
                </div>
              )}
            </div>
          </Paper>
        </Grid>
      </Modal>
    </div>
  );
};

export default AuthenticationModel;
