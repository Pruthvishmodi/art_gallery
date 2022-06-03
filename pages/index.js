/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const Index = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <section id="work">
        <div className="relative h-screen mb-12 overflow-hidden">
          <video
            ref={videoRef}
            muted
            loop
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            preload
          >
            <source
              src="http://abhishekkharsani.com/wp-content/uploads/2021/04/abhishek1.mp4"
              type="video/mp4"
            />
          </video>
          <div className="relative z-20 flex p-8 text-white justify-around">
            <img
              className="image"
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_60,w_165/v1648279748/you%20x%20potfolia%20image/th-removebg-preview_aooxmz.webp"
              alt="logo"
            />
            <nav className="xyz gap-10 flex p-8 text-sm md:text-base from-neutral-700  ">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#journal">Journal</a>
              <a href="#project">project</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="relative z-20 mx-auto h-full ">
            <div className="filmpage text-white flex justify-between items-center w-6/12 mx-auto">
              <span>FILM</span>
              <span>||</span>
              <span>VIDEO</span>
              <span>||</span>
              <span>ANIMATION</span>
            </div>
            <h1 className="heading text-white text-xl md:text-7xl from-neutral-400 w-2/3 text-center mx-auto flex items-center my-8">
              A Good Ending is The Most Important
            </h1>
            <div className="button text-white flex flex-wrap justify-center gap-8 p-8 ">
              <a
                className="border-2 border-white bg-transparent hover:translate-y-2 p-2"
                href="#viewprojects "
              >
                VIEW PROJECTS
              </a>
              <a
                className=" bg-red-600 hover:bg-transparent hover:translate-y-1.5 hover:border-2 p-2"
                href="#hireusnow"
              >
                HIRE US NOW
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="mx-auto container">
          <div className="flex flex-wrap justify-around">
            <div className="m-8 ml-20 relative">
              <img
                className="element-image  p-8 border-red-500  hover:border-2"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_483,w_322/v1648292603/you%20x%20potfolia%20image/young-photographer-in-wintertime_yj2zkq.webp"
                alt="Camera Parsons photo"
              />
              <div className="deco "></div>
            </div>
            <div className="flex-col p-7 text-left  md:p-8 md:w-1/2 md:mx-auto md:my-10 ">
              <address className="mb-4 text-left text-sm from-neutral-400">
                SINCE 1993
              </address>
              <h2 className="items-center text-xl md:text-4xl lg:text-4xl from-neutral-400 pb-4  ">
                We are a creative film and video production company based in
                Bandung Indonesia.
              </h2>
              <div className="divider pb-4 border-t-4 border-red-500 w-1/5"></div>
              <p className="profileInfo sm:h-16 md:h-16 sm:text-xl md:text-sm from-neutral-400 lg:text:2xl">
                We are a creative film and photo production company hungry for
                quality in aesthetics. To create modern recognizable stuff we
                are working with a strong network of experienced professionals.
                We set up teams to shape your identity, push your idea and
                manage the workflow from pre- to post-production.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="featuredFilms"
        className="bg-black text-white sm:text-sm md:text-xl lg:text:2xl"
      >
        <div className="flex-col bg-black">
          <div className="flex flex-col items-center md:flex-row justify-around pt-5 max-w-5xl mx-auto px-4">
            <div className="flex-1">
              <div className="title text-white pb-4 text-4xl from-neutral-400">
                Featured Films
              </div>
              <div className="divider my-auto border-red-500 border-t-2 w-1/5"></div>
              <div className="description pt-4 text-xs sm:h-16 md:h-16 sm:text-sm md:text-base w-full md:w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            </div>
            <div className="my-4">
              <h1 className="title border-white border-2 hover:border-2 p-2 px-8 font-sans text-sm from-neutral-900 hover:translate-y-0.5 hover:bg-red-500">
                View Projects
              </h1>
            </div>
          </div>
          <div className=" text-sm from-neutral-700 parent2 flex flex-wrap p-7 justify-between items-center w-6/12 mx-auto ">
            <a
              className=" hover:bg-red-500 hover:translate-y-0.5 p-1.5"
              href="#all"
            >
              All
            </a>
            <a
              className=" hover:bg-red-500 hover:translate-y-0.5 p-1.5"
              href="#serialfilm"
            >
              Serial Film
            </a>
            <a
              className=" hover:bg-red-500 hover:translate-y-0.5 p-1.5"
              href="#anthologyfilm"
            >
              Anthology Film
            </a>
            <a
              className=" hover:bg-red-500 hover:translate-y-0.5 p-1.5"
              href="#shortfilm"
            >
              Short Film
            </a>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-8">
            <div className="relative w-full">
              <img
                className="w-full"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_252,w_387/v1648471247/you%20x%20potfolia%20image/unidentified-flying-1object-alien-abduction-clipping-path_n4itkr.webp"
                alt="unidentified-flying"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                <h3 className="text-2xl text-center">
                  Duis aute irure Dolor In reprehenderit.
                </h3>
                <p className=" text-sm text-center">
                  Exepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className="w-full"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_252,w_387/v1648471247/you%20x%20potfolia%20image/2wolf-hunting-in-mountain_nsw8ky.webp"
                alt="wolf-hunting"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                <h3 className="text-2xl text-center">
                  Duis aute irure Dolor In reprehenderit.
                </h3>
                <p className=" text-sm text-center">
                  Exepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className="w-full"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_252,w_387/v1648471253/you%20x%20potfolia%20image/3mocked-woman-smoking-in-the-kitchen_pnaeiu.webp"
                alt="mocked-woman-smoking"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                <h3 className="text-2xl text-center">
                  Duis aute irure Dolor In reprehenderit.
                </h3>
                <p className=" text-sm text-center">
                  Exepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className="w-full"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_252,w_387/v1648471247/you%20x%20potfolia%20image/4medieval-knights-on-battle-field_gfeuyh.webp"
                alt="medieval-knights"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                <h3 className="text-2xl text-center">
                  Duis aute irure Dolor In reprehenderit.
                </h3>
                <p className=" text-sm text-center">
                  Exepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className="w-full"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_252,w_387/v1648471247/you%20x%20potfolia%20image/5war-in-the-forest_v7hyeu.webp"
                alt="war-in-the-forest"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                <h3 className="text-2xl text-center">
                  Duis aute irure Dolor In reprehenderit.
                </h3>
                <p className=" text-sm text-center">
                  Exepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className="w-full"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_252,w_387/v1648471247/you%20x%20potfolia%20image/6show_d4evmj.webp"
                alt="show"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
                <h3 className="text-2xl text-center">
                  Duis aute irure Dolor In reprehenderit.
                </h3>
                <p className=" text-sm text-center">
                  Exepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work ">
        <div className="bg-red-600 text-white p-8 flex justify-center flex-col items-center">
          <h2 className="text-5xl from-neutral-900 p-8">
            Are You Ready? Let’s Work!
          </h2>
          <h4 className=" border-2 p-3 font-serif text-sm from-neutral-900 hover:translate-y-0.5 hover:bg-red-400 ">
            HIRE US NOW
          </h4>
        </div>
      </section>
      <section id="footer">
        <div className="footerr bg-white flex flex-col md:flex-row justify-around items-center  p-2">
          <div className="text-sm from-neutral-400">
            © Copyright 2022, Built by PRUTHVISH MODI
          </div>
          <div className="©rightlogo">
            <img
              className="p-4"
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_60,w_165/v1648279748/you%20x%20potfolia%20image/th-removebg-preview_aooxmz.webp"
              alt="logo"
            />
          </div>
          <div className="icon">
            <nav className="flex flex-row items-center gap-4 h-28">
              <a
                className="hover:translate-y-0.5"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="25"
                    height="25"
                    rx="7.13616"
                    stroke="#14142B"
                    strokeWidth="2"
                  />
                  <path
                    d="M19.8968 8.1543V8.1543C16.9993 8.1543 14.6504 10.5032 14.6504 13.4007V25.4407"
                    stroke="#14142B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12.083"
                    y1="14.6914"
                    x2="20.0032"
                    y2="14.6914"
                    stroke="#14142B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                className="hover:translate-y-0.5"
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.32747 18.7162L5.98371 18.2546L4.76351 17.0432C2.49398 14.7902 1.80935 11.9233 1.97021 9.08832C2.11509 6.53473 2.94701 4.06872 3.86092 2.2682C4.59404 3.40359 5.74989 4.56191 6.89868 5.54515C8.22623 6.68139 9.65495 7.67674 10.669 8.2354L12.1516 9.05212V7.35952C12.1516 6.02306 12.9027 4.56641 14.1977 3.41306C15.4835 2.26791 17.1994 1.52214 18.9347 1.52214C20.1769 1.52214 21.438 1.9361 22.5087 2.48127C23.5886 3.03113 24.3747 3.66262 24.6722 3.98959L24.9071 4.24771L25.2515 4.30365L28.4117 4.81689L26.12 8.79971L25.9887 9.02782L25.9867 9.29099C25.9212 18.0788 20.1872 24.8737 12.6551 24.9983C9.8062 25.0455 7.26621 24.0946 5.24663 22.8164C3.58427 21.7643 2.31626 20.5167 1.54851 19.4907L4.32747 18.7162Z"
                    stroke="#14142B"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                className="hover:translate-y-0.5"
                href="https://www.gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                    stroke="#4E4B66"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3.00098L11 10.001L1 3.00098"
                    stroke="#4E4B66"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="hover:translate-y-0.5"
                href="https://www.intagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="25"
                    height="25"
                    rx="7.13616"
                    stroke="#14142B"
                    strokeWidth="2"
                  />
                  <circle
                    cx="13.5009"
                    cy="13.2655"
                    r="5.09851"
                    stroke="#14142B"
                    strokeWidth="2"
                  />
                  <circle cx="20.4792" cy="6.5788" r="1.58271" fill="#14142B" />
                </svg>
              </a>
              <a
                className="hover:translate-y-0.5"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="25"
                    height="25"
                    rx="7.13616"
                    stroke="#14142B"
                    strokeWidth="2"
                  />
                  <line
                    x1="8.15723"
                    y1="11.9707"
                    x2="8.15723"
                    y2="19.6031"
                    stroke="#14142B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="8.12006"
                    cy="7.95111"
                    r="1.40717"
                    fill="#14142B"
                  />
                  <path
                    d="M19.3868 19.5944V15.1211C19.3868 13.4044 17.9951 12.0127 16.2784 12.0127V12.0127C14.5616 12.0127 13.1699 13.4044 13.1699 15.1211V19.5944"
                    stroke="#14142B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                className="hover:translate-y-0.5"
                href="https://www.whatsup.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1C6.37273 1 1 6.37273 1 13C1 15.2211 1.606 17.3004 2.65818 19.0845L1 25L7.14945 23.4765C8.88073 24.4453 10.8749 25 13 25C19.6273 25 25 19.6273 25 13C25 6.37273 19.6273 1 13 1Z"
                    stroke="#14142B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1745 14.8396C15.4488 14.5797 15.8145 14.4393 16.1916 14.4491C16.5688 14.4589 16.9267 14.6181 17.1872 14.8919L18.4972 16.4316C18.7262 16.7323 18.8271 17.1117 18.7777 17.4869C18.7284 17.862 18.5328 18.2023 18.2339 18.4331L17.2994 19.2346C16.9346 19.5703 16.4675 19.7726 15.9738 19.8085C15.48 19.8444 14.9887 19.7119 14.5794 19.4325C10.8724 17.7136 7.80687 14.148 6.54431 9.98941C6.3332 9.54051 6.27941 9.03324 6.39166 8.54984C6.5039 8.06643 6.77559 7.63522 7.1627 7.3261L8.09908 6.52381C8.37351 6.26445 8.73909 6.12456 9.11598 6.13468C9.49288 6.14481 9.85047 6.30413 10.1107 6.57785L11.4216 8.11762C11.6502 8.41837 11.751 8.79767 11.7018 9.17269C11.6527 9.54771 11.4576 9.88797 11.1592 10.1192L10.5913 10.6066C11.7574 12.3204 13.1046 13.9028 14.6095 15.3263L15.1745 14.8396Z"
                    stroke="#14142B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
