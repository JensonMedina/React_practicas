
import PropTypes from "prop-types";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";

const CustomAlert = ({ title, message, onClose }) => {
  return (
    <Alert className="absolute top-0 left-[-1px] w-[350px] z-10 h-[200px] flex flex-col justify-center">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <Button onClick={onClose}>Aceptar</Button>
    </Alert>
  );
};

CustomAlert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomAlert;
