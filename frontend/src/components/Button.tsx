import { ButtonType } from "../../types/types";

const Button: React.FC<ButtonType> = ({ children, className }) => {
  return (
    <button className={`text-white py-2 px-3 text-xs rounded-xs ${className}`}>
      {children}
    </button>
  );
};

export default Button;
