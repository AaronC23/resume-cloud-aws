import Image from "next/image";
import background from "../images/bg-image.jpg";

const Projects = () => (
  <div>
    <div>
      <Image
        className="-z-10"
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        width={100}
        height={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <p>
      Image Component
      <br />
      as a Background
    </p>
  </div>
);

export default Projects;
