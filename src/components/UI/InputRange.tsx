interface Props {
  value: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRange: React.FC<Props> = ({ value, onChange, name }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.style.backgroundSize =
      ((parseInt(e.target.value) - parseInt(e.target.min)) * 100) /
        (parseInt(e.target.max) - parseInt(e.target.min)) +
      "% 100%";
    onChange(e);
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between ">
        <label className="text-base text-white">Character Length</label>
        <span className="text-3xl text-[#A4FFAF]">{value}</span>
      </div>
      <input
        name={name}
        type="range"
        min={0}
        max={20}
        value={value}
        onChange={(e) => handleChange(e)}
        className="range"
      />
    </div>
  );
};
