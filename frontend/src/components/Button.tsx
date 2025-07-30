import { ButtonType } from "../../types/types";

const Button: React.FC<ButtonType> = ({ children, className, onClick }) => {
  return (
    <button
      className={`text-white py-2 px-3 text-xs rounded-xs ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
