import { FormState } from "../types";
import { calculatePasswordStrength } from "../utils/password-strength";
import { getRandomChart, getSpecialChar } from "../utils/random-generator";

type CounterState = {
  password: string;
  settings: FormState;
  setPassword: (value: React.SetStateAction<string>) => void;
};

export const useGeneratePassword = ({
  password,
  settings,
  setPassword,
}: CounterState) => {
  const score = calculatePasswordStrength(password);

  const settingsArray = [
    {
      value: settings.useUpperCase,
      getCharacter: () => getRandomChart(65, 90),
    },
    {
      value: settings.useLowerCase,
      getCharacter: () => getRandomChart(97, 122),
    },
    {
      value: settings.useNumbers,
      getCharacter: () => getRandomChart(48, 57),
    },
    {
      value: settings.useSymbols,
      getCharacter: () => getSpecialChar(),
    },
  ];

  const handleOnClick = () => {
    let passwordGenerate = "";

    const selectSettings = settingsArray.filter((item) => item.value);

    for (let i = 0; i < settings.length; i++) {
      const index = Math.floor(Math.random() * selectSettings.length);
      const letter = selectSettings[index]?.getCharacter();

      if (letter) {
        passwordGenerate += letter;
      }
    }
    setPassword(passwordGenerate);
  };

  return { score, handleOnClick };
};
