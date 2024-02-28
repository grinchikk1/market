interface SwitchProps {
  value: boolean;
  onChange: () => void;
}

function Switch(props: SwitchProps) {
  const toggleClass = "transform translate-x-5";

  return (
    <div
      onClick={props.onChange}
      className={`absolute top-5 right-5 p-1 md:w-14 md:h-7 w-12 h-6 flex items-center ${props.value === true ? "bg-rose-300" : "bg-gray-300"} rounded-full cursor-pointer`}
    >
      <div
        className={`${props.value === true ? "bg-rose-600" : "bg-white"} md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transition transform${props.value ? toggleClass : null}`}
      ></div>
    </div>
  );
}

export default Switch;
