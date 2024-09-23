import { Icon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa"

const socials = [
    {Icon: <FaGithub/>, path: ""},
    {Icon: <FaWhatsapp/>, path: ""},
    {Icon: <FaTelegramPlane/>, path: ""},
    {Icon: <FaInstagram/>, path: ""},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.Icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
