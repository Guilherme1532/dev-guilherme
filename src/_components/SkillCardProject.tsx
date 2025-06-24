type SkillCardProps = {
  name: string;
  imgSrc: string;
  color: string;
};
import Image from "next/image";

export default function SkillCardProject({
  name,
  imgSrc,
  color,
}: SkillCardProps) {
  return (
    <div
      className="border-3 p-3 w-14 h-14 rounded-full flex flex-col items-center justify-center hover:scale-105 hover:border-1 transition-transform duration-300"
      style={{ borderColor: color }}
    >
      <Image
        src={imgSrc}
        alt={name}
        width={24}
        height={24}
        className="mx-auto"
      />
    </div>
  );
}
