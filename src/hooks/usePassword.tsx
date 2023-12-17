import { useState } from "react";
import { FormState } from "../types";

export const usePassword = () => {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<FormState>({
    length: 0,
    useUpperCase: true,
    useLowerCase: true,
    useNumbers: false,
    useSymbols: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "on") {
      setSettings((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setSettings((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return { password, settings, handleChange, setPassword };
};
