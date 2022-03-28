/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";

const Index = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <section id="home">
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
            <nav className="xyz gap-12 flex p-8">
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
            <h1 className="heading text-white text-7xl from-neutral-400 w-2/3 text-center mx-auto flex items-center my-8">
              A Good Ending is The Most Important
            </h1>
            <div className="button text-white flex justify-center gap-8 p-8 ">
              <a
                className="border-2 border-white bg-transparent p-2"
                href="#viewprojects "
              >
                VIEW PROJECTS
              </a>
              <a
                className="border-2 border-red-600 bg-red-600 p-2"
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
                className="element-image  p-8 border-red-500  border-1"
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_483,w_322/v1648292603/you%20x%20potfolia%20image/young-photographer-in-wintertime_yj2zkq.webp"
                alt="Camera Parsons photo"
              />
              <div className="deco "></div>
            </div>
            <div className="flex-col p-7 text-left  md:p-8 md:w-1/2 md:mx-auto md:my-10 ">
              <address className="mb-8 text-center">SINCE 1993</address>
              <h2 className="items-center text-xl md:text-4xl lg:text-4xl from-neutral-400 pb-4  ">
                We are a creative film and video production company based in
                Bandung Indonesia.
              </h2>
              <div className="divider pb-4 border-t-4 border-red-500 w-1/5"></div>
              <p className="profileInfo sm:h-16 md:h-16 text-lg sm:text-xl md:text-lg lg:text:2xl">
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
      <section id="featuredFilms" className="bg-black text-white">
        <div className="flex-col bg-black">
          <div className="parent1 flex items-center justify-around pt-5">
            <div className="left1 w-1/2">
              <div className="title text-white pb-4">Featured Films</div>
              <div className="divider my-auto border-red-500 border-t-2 w-1/5"></div>
              <div className="description pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            </div>
            <div className="right1">
              <h1 className="title border-white border-2 p-3 font-sans hover:bg-red-500">
                View Projects
              </h1>
            </div>
          </div>
          <div className="parent2 flex p-8 justify-between items-center w-6/12 mx-auto ">
            <a className=" hover:bg-red-500" href="#all">
              All
            </a>
            <a className=" hover:bg-red-500" href="#serialfilm">
              Serial Film
            </a>
            <a className=" hover:bg-red-500" href="#anthologyfilm">
              Anthology Film
            </a>
            <a className=" hover:bg-red-500" href="#shortfilm">
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
    </>
  );
};

export default Index;
