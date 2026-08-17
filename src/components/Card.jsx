function Card({
  image,
  title,
  description,
  children,
  className = "",
  onClick,
  imageAlt = "card image",
  titleTag = "h3",
}) {
  const TitleTag = titleTag;

  return (
    <div
      className={`
        flex flex-col
        rounded-lg
        bg-white
        border
        border-border
        p-5
        text-secondary
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${className}
      `}
      onClick={onClick}
    >
        {image && (
            <div className="p-2">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full rounded-lg object-cover"
                />
            </div>
        )}

        <div className="flex flex-col gap-1">
            {title && (
                <TitleTag className="text-base font-semibold text-primary">
                    {title}
                </TitleTag>
            )}

            {description && (
                <p className="text-[14px] leading-relaxed text-secondary-text">
                    {description}
                </p>
            )}

            {children && <div className="mt-3">{children}</div>}
        </div>
    </div>
  );
}

export default Card;