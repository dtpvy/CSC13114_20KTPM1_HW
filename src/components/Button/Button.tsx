import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  type?: 'default' | 'pill' | 'rounded';
};

const Button = ({ className, size = 'md', type = 'default', onClick, children }: Props) => {
  return (
    <button
      className={classNames(
        styles['custom-button'],
        styles[`custom-button-${type}`],
        styles[`custom-button-${size}`],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
