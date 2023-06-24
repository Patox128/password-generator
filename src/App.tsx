import { useState } from "react";
import { InputRange } from "./components/UI/InputRange";
import { FormState } from "./types";
import { CheckBox } from "./components/UI/CheckBox";
import { getRandomChart, getSpecialChar } from "./utils/random-generator";
import { PasswordDisplay } from "./components/password-generator/PasswordDisplay";
import { calculatePasswordStrength } from "./utils/password-strength";
import { PasswordStrength } from "./components/password-generator/PasswordStrength";

function App() {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<FormState>({
    length: 0,
    useUpperCase: true,
    useLowerCase: true,
    useNumbers: false,
    useSymbols: false,
  });

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

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-11/12 max-w-[540px] flex-col gap-6">
        <h1 className="text-center text-2xl text-[#777582] sm:text-3xl">
          Password Generator
        </h1>
        <PasswordDisplay password={password} />
        <div className="flex flex-col gap-8 bg-[#24232B] px-4 py-4 sm:px-8 sm:py-6">
          <InputRange
            value={settings.length}
            name="length"
            setValues={setSettings}
          />
          <div className="flex flex-col gap-5 text-white ">
            <CheckBox
              id="useUpperCase"
              label="Include Upercase Letters"
              name="useUpperCase"
              setValues={setSettings}
              value={settings.useUpperCase}
            />
            <CheckBox
              id="useLowerCase"
              label="Include Lowercase Letters"
              name="useLowerCase"
              setValues={setSettings}
              value={settings.useLowerCase}
            />
            <CheckBox
              id="useNumbers"
              label="Include Numbers"
              name="useNumbers"
              setValues={setSettings}
              value={settings.useNumbers}
            />
            <CheckBox
              id="useSymbols"
              label="Include Symbols"
              name="useSymbols"
              setValues={setSettings}
              value={settings.useSymbols}
            />
          </div>
          <PasswordStrength score={score} />
          <button
            type="button"
            onClick={handleOnClick}
            className="flex items-center justify-center gap-4 border-2 border-[#A4FFAF] bg-[#A4FFAF] py-4 text-lg hover:bg-[#24232B] hover:fill-[#A4FFAF] hover:text-[#A4FFAF]"
          >
            GENERATE
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
