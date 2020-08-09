import React, { useState } from "react";
import { useField } from "formik";
import { StyledComponent } from "styled-components";

import { Container, Input } from "./styles";

interface Props {
  name: string;
  type: string;
  mask?: any[];
  placeholder?: string;
  // maxLength?: number;
  // max?: number;
  // pattern?: string;
  passwordIcons?: [
    StyledComponent<any, any, {}, never>,
    StyledComponent<any, any, {}, never>
  ];
}

// styled-icons/types/StyledIcon is getting error;

const FormInput: React.FC<Props> = ({ passwordIcons, ...props }) => {
  const [inputType, setInputType] = useState(props.type);
  const [field, meta] = useField(props);

  var Icons = !passwordIcons
    ? false
    : {
        notShowText: passwordIcons[0],
        showText: passwordIcons[1],
      };

  function handleIconClick() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  return (
    <Container className={meta.touched ? "focused" : ""}>
      <Input {...field} {...props} type={inputType} />
      {Icons && Icons.showText && inputType === "text" ? (
        <Icons.showText onClick={handleIconClick} />
      ) : (
        Icons &&
        Icons.notShowText && <Icons.notShowText onClick={handleIconClick} />
      )}
      {/* Typescript  ;D  */}
    </Container>
  );
};

export default FormInput;
