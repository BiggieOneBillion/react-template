import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { signupSchema } from "../form-validation/auth.validations";
import { useToast } from "@chakra-ui/react";
import { api } from "../api/api-settings";
import { useState } from "react";


const useSignUp = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(signupSchema),
      });
    
      const { width } = useWindowSize();
    
      const [isLoading, setIsLoading] = useState(false);
    
      const toast = useToast();
    
      const onSubmit = async (value) => {
        const { confirmPassword, ...others } = value;
    
        setIsLoading(true);
        try {
          const response = await api.post("your/api/endpoint", others);
          if (response.status === 201) {
            toast({
              position: "top-right",
              status: "success",
              title: "Operation Successful",
              description: "Account Created Successfully",
              duration: 1500,
            });
            setIsLoading(false);
            setTimeout(() => {
              handleSignIn();
            }, 1500);
          }
        } catch (error) {
          handleError(error);
          setIsLoading(false);
        }
      };

      return {
         handleSubmit,
         errors,
         isLoading,
         onSubmit,
         width,
         register
      }
}

export default useSignUp