import Image from "next/image";

type SkillCardProps = {
  name: string;
  imgSrc: string;
  color: string;
};

export default function SkillCard({ name, imgSrc, color }: SkillCardProps) {
  return (
    <div className="border-b-5 border-r-4 bg-[#16171a90] h-36 px-5 w-full rounded-lg flex flex-col items-center justify-between py-4" 
    style={{ borderColor: color }}>
      <Image
        src={imgSrc}
        alt={name}
        width={48}
        height={48}
        className="mx-auto flex items-center justify-center h-16 w-16"
      />
      <h4 className="font-bold text-lg text-center">{name}</h4>
    </div>
  );
}
