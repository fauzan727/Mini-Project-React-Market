
function Card({ 
  image, 
  title, 
  description, 
  children, 
  className = "", 
  onClick,
  imageAlt = "card image",
  titleTag = "h3"
}) {
  const TitleTag = titleTag;

  return (
    <div className={`flex flex-col bg-white border border-border-color p-[20px] text-secondary-text transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] ${className}`}
     onClick={onClick}>
      {image && (
        <div className="w-full h-auto mb-[10px]">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="flex flex-col gap-[5px]">
        {title && <TitleTag className="m-0 text-base font-semibold text-primary">{title}</TitleTag>}
        {description && <p className="m-0 text-secondary-text text-[14px] my-[10px] leading-relaxed">{description}</p>}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}

export default Card;