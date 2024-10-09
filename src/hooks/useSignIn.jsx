import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authStore, userStore } from "../store/user.store";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../api/api-settings";
import { signinSchema } from "../form-validation/auth.validations";

const useSignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const toast = useToast();

  const updateToken = userStore((state) => state.updateToken);
  const updateIsAllowed = authStore((state) => state.updateIsAllowed);

  const { width } = useWindowSize();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value) => {
    setIsLoading(true);
    try {
      const response = await api.post("your/api/endpoint", value);
      if (response.status === 200) {
        toast({
          position: "top",
          status: "success",
          title: "Operation Successful",
          description: "Welcome Back",
          duration: 1500,
        });
        setIsLoading(false);
        // also update the token
        updateToken(response.data.token);
        // set the Allowed variable to true
        updateIsAllowed(true);
        // navigate to the dashboard
        navigate("/chat");
      }
    } catch (error) {
      handleError(error);
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    width,
    errors,
    isLoading,
  };
};

export default useSignIn;
