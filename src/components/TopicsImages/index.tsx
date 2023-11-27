import Image from "next/image";
import realDataImage from "./real-data.png";
import labData from "./lab-data.png";

const IMAGES = [
  {
    id: "real-users-data",
    alt: "Real users data",
    file: realDataImage,
  },
  {
    id: "lab-data",
    alt: "lab-data",
    file: labData,
  },
];

const TopicsImages = ({ id }: { id: string }) => {
  const imageConfig = IMAGES.find((image) => image.id === id);

  if (!imageConfig) {
    return null;
  }

  return <Image src={imageConfig.file} alt={imageConfig.alt} />;
};

export default TopicsImages;
