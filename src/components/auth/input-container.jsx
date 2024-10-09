import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useWindowSize } from "@reactuses/core";
import React from "react";

const InputContainer = ({
  icon,
  placeholder,
  type,
  inputname,
  register,
  error,
}) => {
  const { width } = useWindowSize();
  return (
    <div className="space-y-1">
      <InputGroup size={width > 760 ? "lg" : "md"}>
        <InputLeftElement pointerEvents="none">
          <span className="text-gray-500">{icon}</span>
        </InputLeftElement>
        <Input
          type={type}
          placeholder={placeholder}
          {...register(inputname, { required: true })}
        />
      </InputGroup>
      {error && <div className="text-red-500 text-sm">{error.message}</div>}
    </div>
  );
};

export default InputContainer;
