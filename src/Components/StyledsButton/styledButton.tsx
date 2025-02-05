import { styled } from "@mui/material";
import React, { ReactNode } from "react";

const Button = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width:"100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
    
}));

interface StyledButtonProps {
  children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default StyledButton;
