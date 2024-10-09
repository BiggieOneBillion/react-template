import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import InputContainer from "./input-container";
import useSignIn from "../../hooks/useSignIn";

const SignIn = ({ handleSignUp }) => {
  const {
    errors,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
    width,
  } = useSignIn();
  return (
    <section className="border border-[#31473A]/30 text-[#31473A] rounded-md py-10 mx-2  px-3 md:px-12 max-w-[700px] lg:w-[500px] min-w-[350px] space-y-5 md:space-y-10">
      <header className="space-y-2">
        <h1 className="text-xl lg:text-2xl font-medium">Log In </h1>
        <p className="text-sm text-black/60">
          Don't have an account?{" "}
          <button onClick={handleSignUp} className="underline">
            Sign Up
          </button>
        </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <VStack spacing={width > 760 ? 6 : 3} align={"stretch"}>
          {/* email */}
          <InputContainer
            register={register}
            type="email"
            icon={<HiOutlineMail />}
            inputname="email"
            placeholder="Enter your email"
            error={errors.email}
          />

          {/* Password */}
          <InputContainer
            register={register}
            type="password"
            icon={<RiLockPasswordLine />}
            inputname="password"
            placeholder="Enter your password"
            error={errors.password}
          />
        </VStack>
        <div className="flex justify-end">
          <Button
            type="submit"
            size={"lg"}
            padding={"0 40px"}
            textColor={"black"}
            isLoading={isLoading}
            loadingText="Processing"
          >
            <span className="text-[15px]">Sign In</span>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
