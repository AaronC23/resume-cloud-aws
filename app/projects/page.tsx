import Image from "next/image";
import background from "../images/bg-image.jpg";

const Projects = () => (
  <div>
    <div>
      <Image
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
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
