import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="user avatar"
        width="30"
        height="30"
        className="rounded-full"
      />
    );
  }
  return <FaUserCircle size={24} />;
};

export default Avatar;