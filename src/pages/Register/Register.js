import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, loading, updateUserProfile, providerLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <button className="btn btn-lg btn-ghost loading"></button>
      </div>
    );
  }

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl text-center font-bold">Please Register</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your photo url</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label font-semibold">
            <p className="text-red-600">{error}</p>
          </label>
        </div>
        <div className="form-control mt-2">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
        <p className="text-xl text-center">OR</p>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-info btn-outline btn-block"
        >
          <FcGoogle /> <span className="ml-2">continue with Google</span>
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-info btn-outline btn-block"
        >
          <FaGithub /> <span className="ml-2">continue with Github</span>
        </button>
        <p className="font-bold">
          Already have an account?
          <Link className="text-red-600" to="/Login">
            Please Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
