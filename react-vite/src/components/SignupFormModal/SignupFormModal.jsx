import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";


function SignupFormModal() {
  const dispatch = useDispatch();
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
    // console.log('firstnameeeee', first_name)


    const validateEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    const validateUsername = (username) => {
      return username.length >= 4;
    };

    const validatePassword = (password) => {
      return password.length >= 6;
    };

    // Adjusted useEffect hook
    useEffect(() => {
      const errors = {};
      if (first_name.trim() === "") { errors.first_name = 'First name is required' };
      if (last_name.trim() === "") { errors.last_name = 'Last name is required' };
      if (!validateEmail(email)) errors.email = 'Please enter a valid email address';
      if (!validateUsername(username)) errors.username = 'Username must be 4 or more characters';
      if (!validatePassword(password)) errors.password = "Password must be 6 or more characters";
      if (password !== confirmPassword) errors.confirmPassword = "Confirmed password must match the password";
      setErrors(errors);
    }, [first_name, last_name, email, username, password, confirmPassword,]);


    const serverResponse = await dispatch(
      thunkSignup({
        first_name,
        last_name,
        username,
        email,
        password,
      })
    );


    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    const err = {};
    if (first_name.trim() === "") { errors.first_name = 'First name is required' };
    if (last_name.trim() === "") { errors.last_name = 'Last name is required' };
    if (!validateEmail(email)) errors.email = 'Please enter a valid email address';
    if (!validateUsername(username)) errors.username = 'Username must be 4 or more characters';
    if (!validatePassword(password)) errors.password = "Password must be 6 or more characters";
    if (password !== confirmPassword) errors.confirmPassword = "Confirmed password must match the password";
    // if (confirmPassword.length < 0) err.confirmPassword = "Confirmed password must be 6 or more characters"
    setErrors(errors);
    setHasSubmitted(false);
    setErrors(err);
  }, [first_name, last_name, username, email, password, confirmPassword])


  return (
    <>
      {hasSubmitted && errors.server && <p>{errors.server}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Welcome to Ruto</h1>
        <label>
          Email
          <input
            className="signup-email-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Username
          <input
            className="signup-username-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && <p>{errors.username}</p>}

        <label>
          First Name
          <input
            className="signup-first-name-input"
            type="text"
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
            required
          />
        </label>
        {errors.first_name && <p>{errors.first_name}</p>}

        <label>
          Last Name
          <input
            className="signup-last-name-input"
            type="text"
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
            required
          />
        </label>
        {errors.last_name && <p>{errors.last_name}</p>}

        <label>
          Password
          <input
            className="signup-password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            className="signup-confirm-password-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;
