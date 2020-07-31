import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";

const Auth = () => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Email Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const [isSignUp, setIsSignUp] = useState(true);

  const dispatch = useDispatch();


  const loading = useSelector((state => state.auth.loading));
  const error = useSelector((state => state.auth.error));
  const isAuthenticated = useSelector((state => state.auth.token !== null));
  const authRedirectPath = useSelector((state => state.auth.authRedirectPath));
  const buildingBurger = useSelector((state => state.burgerBuilder.building));
  
   const onAuth = (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp));
   const onSetAuthRedirectPath = useCallback(() => dispatch(actions.setAuthRedirectPath("/")), [dispatch]);
    

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== "/") {
      onSetAuthRedirectPath();
    }
  }, [onSetAuthRedirectPath, buildingBurger, authRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      }),
    });
    setControls(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAuth(controls.email.value, controls.password.value, isSignUp);
  };

  const switchAuthModeHandler = () => {
    setIsSignUp(!isSignUp);
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (loading) {
    form = <Spinner />;
  }

  let errorMessage = null;

  if (error) {
    switch (error.message) {
      case "EMAIL_NOT_FOUND":
        errorMessage = <strong>Email Not Found</strong>;
        break;
      case "INVALID_PASSWORD":
        errorMessage = <strong>Invalid Password</strong>;
        break;
      case "USER_DISABLED":
        errorMessage = <strong>User has been Disabled</strong>;
        break;
      case "EMAIL_EXISTS":
        errorMessage = <strong>Email Already Exists</strong>;
        break;
      default:
        return <strong>Something went Wrong</strong>;
    }
  }

  let authRedirect = null;

  if (isAuthenticated) {
    authRedirect = <Redirect to={authRedirectPath} />;
  }

  return (
    <div className={classes.AuthData}>
      {authRedirect}
      <div className={classes.AuthError}>{errorMessage}</div>
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success">SUBMIT</Button>
      </form>
      <Button clicked={switchAuthModeHandler} btnType="Danger">
        GO TO {isSignUp ? "SIGN IN" : "SIGN UP"}
      </Button>
    </div>
  );
};

export default Auth;
