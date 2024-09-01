import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CustomAlert from "../Alert/CustomAlert";

const Login = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setMessage("Nombre de usuario vacio.");
      return;
    }
    setIsRegistered(true);
    setMessage("Usuario registrado correctamente!");
    setInput("");
  };
  const handleInput = (e) => {
    const value = e.target.value;
    if (value.includes("o") || value.includes("O")) {
      setMessage("No se puede usar la letra 'o'.");
      return;
    }
    setInput(value.trim());
  };

  const onClose = () => {
    setIsRegistered(false);
    setMessage("");
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-[300px]">
          {message !== "" && (
            <CustomAlert
              title={
                isRegistered ? "Usuario registrado correctamente" : "Error"
              }
              message={message}
              onClose={onClose}
            />
          )}

          {!isRegistered && (
            <form onSubmit={handleForm}>
              <div className="mt-3">
                <Label>Ingrese el nombre de usuario</Label>
                <Input
                  type="text"
                  onChange={handleInput}
                  value={input}
                  placeholder="usuarioDePrueba"
                />
              </div>
              <div className="mt-3">
                <Button type="submit">Registrar</Button>
              </div>
              <p>{input}</p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
