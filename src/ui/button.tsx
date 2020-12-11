import { styled } from "linaria/react";

export enum ButtonType {
  basic = "basic",
}

export type ButtonProps = Readonly<{
  buttonType?: ButtonType;
}>;

export const isBasic = (props: ButtonProps) => props.buttonType === ButtonType.basic;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => isBasic(props) && "blue"};
  color: #fff;

  background-clip: padding-box;
  border-width: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  margin: 0;
  outline: 0;
  padding: 0 20px;
  border-radius: 4px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
`;
