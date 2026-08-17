
function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const getVariantClass = () => {
  
  const baseStyle = "px-[20px] py-[10px] rounded-[5px] font-normal transition-all duration-300 ease-in-out hover:opacity-80 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-black text-white border border-black";

  switch (variant) {
    case "outline":
      return "px-[20px] py-[10px] rounded-[5px] font-normal transition-all duration-300 ease-in-out hover:opacity-80 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-transparent text-[#f3f3f3] border border-[#313131]";
    case "primary":
    default:
      return `${baseStyle} hover:bg-white hover:text-black hover:border-white`;
  }
};

  return (
    <button
      type={type}
      className={`${getVariantClass()} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
