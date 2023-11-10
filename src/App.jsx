import React from "react";
import { Button, Link } from "@nextui-org/react";
import {
  IoFlash,
  IoGlobeOutline,
  IoInfinite,
  IoLogoApple,
  IoLogoReact,
} from "react-icons/io5";
import { FaBook, FaGithub, FaNpm, FaTwitter } from "react-icons/fa";

export default function App() {
  
  return (
    <section>
      <header className="header">
        <div className="flex justify-center flex-col items-center py-[3rem] max-md:py-[1.5rem] max-md:pb-[4rem] pb-[6rem]">
          <div className="max-w-[1000px] p-10 max-md:p-5 max-md:px-7">
            <h2 className="mb-5 max-md:text-[2.6rem] tracking-tight max-lg:5xl font-black text-center text-7xl bg-clip-text bg-gradient-to-r from-[#fff] via-[#b0b0b0] to-[#fff] text-transparent bg-300% animate-gradient">
              Bolster Your Storage with the IPFS Network!
            </h2>
            <p className="text-lg text-center text-white max-md:text-[15px] max-md:leading-normal">
              Elevate Your Experience with Infiniti Vault: Revealing the Power
              of the Vast IPFS Network
            </p>
          </div>
          {/* <div className="flex items-center justify-center gap-x-3 relative">
            <Button
              as={Link}
              className="rounded-full px-6 border-[2px] border-[#b9ff66] bg-[#b9ff66]/[13%] text-[#b9ff66] opacity-40"
              href="#"
              variant="flat"
              isDisabled
            >
              <FaNpm size={25} />
              Contribute
            </Button>
            <Button
              as={Link}
              className="rounded-full px-6 border-[2px] border-[#b9ff66] bg-[#b9ff66]/[13%] text-[#b9ff66] opacity-40"
              href="#"
              variant="flat"
              isDisabled
            >
              <FaBook color="#b9ff66" size={15} />
              SDK Docs
            </Button>
          </div> */}
        </div>
      </header>
      <section className="max-w-[1250px] mx-auto py-10 px-7 max-md:px-8">
        <div className="flex items-center gap-x-4">
          <div className="w-[70px] h-[1px] bg-white/[50%] max-md:w-[50px]"></div>
          <h1 className="text-3xl font-black max-md:text-2xl text-white/[80%]">
            Built for scale
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 py-10 max-md:grid-cols-1 text-white">
          <div className=" rounded-xl">
            <IoFlash size={25} />
            <h3 className="font-semibold text-[1.4em] max-md:text-[1.3em] py-1 pt-3">
              Lightning Uploads and Downloads
            </h3>
            <p className="text-md max-md:text-sm opacity-70">
              Empower your data management with Lightning-speed Upload and
              Download, harnessing bandwidth for optimal performance.
            </p>
          </div>
          <div className=" rounded-xl">
            <IoInfinite size={25} />
            <h3 className="font-semibold text-[1.4em] max-md:text-[1.3em] py-1 pt-3">
              Unlimited Data Upload
            </h3>
            <p className="text-md max-md:text-sm opacity-70">
              Streamline your operations with the capability for unlimited data
              uploads, ensuring seamless handling of large volumes with
              precision and reliability.
            </p>
          </div>
          <div className=" rounded-xl">
            <IoGlobeOutline size={25} />
            <h3 className="font-semibold text-[1.4em] max-md:text-[1.3em] py-1 pt-3">
              Static Web Hosting{" "}
              <span className="text-sm font-regular text-[#b9ff66] ml-2">
                Beta
              </span>
            </h3>
            <p className="text-md max-md:text-sm opacity-70">
              Experience the Benefits of Complimentary Static Web Hosting,
              Providing You with a Reliable Platform for Effortless Website
              Deployment and Management.
            </p>
          </div>
          <div className=" rounded-xl">
            <IoLogoReact size={25} />
            <h3 className="font-semibold text-[1.4em] max-md:text-[1.3em] py-1 pt-3">
              React SDK{" "}
              <span className="text-sm font-regular text-[#b9ff66] ml-2">
                Coming soon
              </span>
            </h3>
            <p className="text-md max-md:text-sm opacity-70">
              Integrate Infiniti Vault into Your Web Applications with our
              Dedicated React SDK, Offering Seamless Implementation for Secure
              and Scalable File Storage Solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#b9ff66] text-black">
        <div className="grid max-w-[1250px] px-7 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              Coming soon to the mobile stores
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-black">
              Get ready for Infiniti Vault on Mobile, Coming soon to the
              appstore and playstore. Anticipate!
            </p>
          </div>
          {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div> */}
        </div>
      </section>
      <footer className="flex items-center justify-between max-w-[1250px] mx-auto p-10 max-md:py-5 max-md:px-7">
        <div>
          <a href="https://github.com/Infiniti-Vault" target="_blank">
            <FaGithub
              size={20}
              className="opacity-70 hover:opacity-100 cursor-pointer"
            />
          </a>
        </div>
        <p className="text-sm text-white/50">With ❤ from <a href="https://pysavant.netlify.app" className="hover:text-white/100">Pysavant</a></p>
      </footer>
    </section>
  );
}
