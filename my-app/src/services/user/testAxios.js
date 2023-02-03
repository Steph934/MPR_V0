// Register.js
import axios from "./api/axios";
const REGISTER_URL = "/register";
// other imports
const handleClick = async (e) => {
  e.preventDefault();
  const v1 = USER_REGEX.test(user);
  const v2 = PWD_REGEX.test(pwd);
  if (!v1 || !v2) {
    setErrMsg("Invalid Entry");
    return;
  }

  try {
    const response = await axios.post(
      REGISTER_URL,
      JSON.stringify({ user, pwd }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    setSuccess(true);
    //clear state and controlled inputs
    setUser("");
    setPwd("");
    setMatchPwd("");
  } catch (err) {
    if (!err?.response) {
      setErrMsg("No Server Response");
    } else if (err.response?.status === 409) {
      setErrMsg("Username Taken");
    } else {
      setErrMsg("Registration Failed");
    }
    errRef.current.focus();
  }
};