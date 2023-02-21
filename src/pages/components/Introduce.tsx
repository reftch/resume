import Image from "next/image";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-element">
        <div className="introduce-image">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <h2 className="introduce-name">
          Taras Chornyi
          <br />
          <span>Full Stack Developer</span>
        </h2>
      </div>
    </div>
  );
};

export default Introduce;
