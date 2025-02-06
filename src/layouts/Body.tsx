import background from "../assets/img/background.jpg";
import { Registrasi } from "../components/modals/Registrasi";

export const Body: React.FC = () => {
  return (
    <div className="flex-1 bg-black text-white flex items-center justify-center pb-6">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src={background}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="video-overlay absolute top-0 left-0 w-full flex-1 h-full text-center">
        <div className="video-content space-y-2 relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
          Molestias assumenda provident doloribus quos officiis.
          </p>
          <Registrasi />
        </div>
      </div>
    </div>
  );
};
