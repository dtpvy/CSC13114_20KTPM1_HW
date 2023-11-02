import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={classNames(styles["custom-input"], className)}
      {...props}
    />
  );
};

export default Input;
