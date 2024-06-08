import {
  Behance,
  Dribbble,
  Facebook,
  Github,
  Insta,
  Linkedin,
  X,
  Share,
} from "../atoms/icons";

type socialProps = {
  link: string;
  platform: string;
  color: string;
};
export default function SocialLink({ link, platform, color }: socialProps) {
  return (
    <a
      href={link}
      className={`flex p-2 rounded-full ${
        platform === "" ? "bg-[#ffffff60]" : "bg-white"
      } `}
    >
      {platform === "behance" && <Behance stroke={color} />}
      {platform === "dribbble" && <Dribbble stroke={color} />}
      {platform === "facebook" && <Facebook stroke={color} />}
      {platform === "github" && <Github stroke={color} />}
      {platform === "insta" && <Insta stroke={color} />}
      {platform === "linkedin" && <Linkedin stroke={color} />}
      {platform === "x" && <X stroke={color} />}
      {platform === "" && <Share stroke={color} />}
    </a>
  );
}
