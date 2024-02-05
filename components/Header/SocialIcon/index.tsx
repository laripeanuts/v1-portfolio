import { useState } from "react";
import { SocialIcon } from "react-social-icons";

type SocialIconItemProps = {
  url: string;
  network: string;
};

export const SocialIconItem = ({ url, network }: SocialIconItemProps) => {
  const [hover, setHover] = useState(false);
  return (
    <SocialIcon
      url={url}
      network={network}
      bgColor="transparent"
      target="_blank"
      fgColor={hover ? "#523db2" : "lightgray"}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        transform: hover ? "scale(1.2)" : "scale(1)",
        transition: "all 0.2s ease-in-out",
      }}
    />
  );
};
