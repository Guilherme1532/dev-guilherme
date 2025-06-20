type SkillCardProps = {
  name: string;
  imgSrc: string;
  color: string;
};
import Image from "next/image";

export default function SkillCardProject({ name, imgSrc, color }: SkillCardProps) {
  return (
    <div className={`${color} p-0.5 rounded-full`}>
      <div className="p-3 h-12 bg-[#000b10] rounded-full flex flex-col items-center justify-center">
        <Image
          src={imgSrc}
          alt={name}
          width={24}
          height={24}
          className="mx-auto"
        />
      </div>
    </div>
  );
}