interface PlaceholderImageProps {
  name: string;
  className?: string;
}

export const PlaceholderImage = ({
  name,
  className = "",
}: PlaceholderImageProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`flex items-center justify-center bg-gray-200 text-gray-600 font-semibold rounded-full ${className}`}
      style={{ aspectRatio: "1/1" }}
    >
      {initials}
    </div>
  );
};
