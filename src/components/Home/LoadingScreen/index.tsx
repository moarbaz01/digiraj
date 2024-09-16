import Image from "next/image";
import logo from "../../../public/logo.png";

export default function LoadingScreen() {
  return (
    <div className="flex items-center flex-col gap-1 fixed top-0 left-0 right-0 bottom-0 justify-center bg-white z-[9999] h-screen w-full">
      <Image
        src={logo}
        alt="DigiR"
        className="animated-logo"
        height={100}
        width={100}
      />
    </div>
  );
}
