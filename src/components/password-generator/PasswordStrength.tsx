export const PasswordStrength = ({ score }: { score: number }) => {
  const colors = [
    { text: "", color: "transparent" },
    { text: "TOO WEAK!", color: "bg-red-600" },
    { text: "WEAK", color: "bg-orange-500" },
    { text: "MEDIUM", color: "bg-yellow-300" },
    { text: "STRONG", color: "bg-green-300" },
  ];

  const rectangles = [];

  for (let i = 0; i < 4; i++) {
    rectangles.push(
      <div
        key={i}
        className={`h-7 w-[10px] 
        ${i >= score ? "border-2 border-white" : ""}
        ${i < score ? colors[score].color : ""}
        `}
      />
    );
  }

  return (
    <div className="flex items-center justify-between bg-[#14131b] px-4 py-6 sm:px-8">
      <p className="text-lg text-[#777582]">STRENGTH</p>
      <div className="flex items-center gap-2">
        <span className="mr-2 text-lg text-white sm:text-2xl">
          {colors[score].text}
        </span>
        {rectangles}
      </div>
    </div>
  );
};
