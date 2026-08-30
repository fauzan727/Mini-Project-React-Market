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
            <div className="h-48 w-full flex items-center justify-center bg-gray-50 rounded-lg p-3 mb-4">
                <img
                    src={image}
                    alt={imageAlt}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
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