import { Image } from "@/components/ui/media/Image";
import { PlaceholderImage } from "@/components/ui/media/PlaceholderImage";

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

export const CharacterCard = ({
  name,
  role,
  description,
  imageSrc,
}: CharacterCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-full object-cover"
          fallbackSrc={`/images/characters/${name.toLowerCase()}.png`}
        />
        <PlaceholderImage
          name={name}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};
