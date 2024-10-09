import { useState } from "react";
import SignUp from "./sign-up";
import SignIn from "./sign-in";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const signIn = () => setIsSignIn(true);
  const signUp = () => setIsSignIn(false);
  return (
    <section className="flex-1 pt-10 md:min-h-screen flex flex-col gap-4 justify-center items-center pb-5">
      <div className="">
        {isSignIn ? (
          <SignIn handleSignUp={signUp} />
        ) : (
          <SignUp handleSignIn={signIn} />
        )}
      </div>
    </section>
  );
};

export default Auth;
