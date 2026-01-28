import Image from "next/image";
import TeaGif from "../public/tea.gif";
import WorkIcon from "../public/man.gif";
import Coin from "../public/coin.gif";
import Group from "../public/group.gif";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="hero flex flex-col items-center justify-center gap-4 my-12">
        <section className="flex items-center space-x-4 text-white px-4 py-2">
          <p className="font-extrabold text-3xl md:text-5xl text-center">Get Me a Chai</p>
          <span>
            <Image
              src={TeaGif}
              alt="Tea Gif"
              width={88}
              height={20}
              className="invertImg"
            />
          </span>
        </section>
        <p className="text-center px-4">A crowdfunding platform for creators to fund their projects.</p>
        <p className="text-center px-4">
          A place where your fans can buy you a chai. Unleash the power of your
          fans and get your projects funded.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>{" "}
          </Link>
          <Link href="/about">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="line h-1  bg-white opacity-10 my-10"></div>
      <div className="flex flex-col items-center justify-center my-12 px-4">
        <p className="text-2xl md:text-3xl font-bold text-center">
          Your <em className="text-gray-300">Fans</em> can buy you a CHAI
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 md:gap-12 lg:gap-20 my-10">
          <div className="component flex flex-col justify-center items-center gap-2 text-center">
            <Image src={WorkIcon} alt="Work Icon" width={120} height={120} />
            <p className="font-semibold text-lg">Fans want to help</p>
            <p className="font-medium text-sm">
              Your fans are available to support you
            </p>
          </div>

          <div className="component flex flex-col justify-center items-center gap-2 text-center">
            <Image src={Coin} alt="Work Icon" width={120} height={120} />
            <p className="font-semibold text-lg">Fans want to contribute</p>
            <p className="font-medium text-sm">
              Your fans are willing to contribute financially
            </p>
          </div>

          <div className="component flex flex-col justify-center items-center gap-2 text-center">
            <Image src={Group} alt="Work Icon" width={120} height={120} />
            <p className="font-semibold text-lg">Fans want to collaborate</p>
            <p className="font-medium text-sm">
              Your fans are ready to collaborate with you
            </p>
          </div>
        </section>
      </div>

      <div className="line h-1  bg-white opacity-10 my-10"></div>

      <div className="flex flex-col my-12 justify-center items-center gap-8 px-4">
        <p className="font-extrabold text-2xl md:text-3xl text-center">Learn more about us</p>
        <div className="w-full md:w-[70%] lg:w-[50%] h-[30vh] md:h-[40vh]">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/QtaorVNAwbI?si=ifYncFugJ5quIG1e"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
