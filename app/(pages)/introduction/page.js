"use client"
import Link from "next/link";
import React, { useState } from "react";



function Introduction() {
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [location, setLocation] = useState("");
    const [showLocation, setShowLocation] = useState(false);
    const handleProceed = () => {
        setShowLocation(true);
        setIsTyping(false);
    };

    const handleBack = () => {
        setShowLocation(false);
        setIsTyping(true);
    };

    const handleClick = () => {
        setIsTyping(true);
    };

  return (
    <>
      <div className="flex flex-col flex-auto">
        <nav className="items-center flex h-16 justify-between left-0 fixed top-0 w-full z-30 mx-auto max-w-[2560px] px-8">
          <div className="flex items-center relative z-30 ">
            <Link
              href="/"
              className="font-bold text-[10px]"
              style={{ fontSize: "clamp(10px,-2px + .9375vw,16px)" }}
            >
              SKINSTRIC
            </Link>
          </div>
        </nav>
        <main className="relative flex flex-col flex-auto">
                    <div className="flex flex-auto flex-col pb-9 relative mx-auto max-w-[2560px] px-8 w-full">
                        <div className="absolute left-8 top-[86px] block overflow-hidden">
                            <h1
                                className="font-semibold tracking-[-.02em] leading-5"
                                style={{ fontSize: "clamp(10px,-2px + .9375vw,16px)" }}
                            >
                                TO START ANALYSIS
                            </h1>
                        </div>
                        <div className="introduction-square js-introduction-square">
                            <span className="dotted-square is-expanded is-animated"></span>
                        </div>
                        <div className="items-center flex flex-col justify-center left-1/2 absolute text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <div
                                style={{ fontSize: "clamp(10px,-6px + 1.5625vw,14px)" }}
                                className="bottom-[100%] mb-1 opacity-40 absolute uppercase font-normal tracking-[0] leading-[1.71]"
                            >
                                {showLocation ? "Enter Location" : "Click to type"}
                            </div>
                            <form>
                                <div className="py-[5px] relative">
                                    {!showLocation && (
                                        <>
                                           {!showLocation && (
                                        <>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Introduce Yourself"
                                            className="introduction__input text-black placeholder:text-black"
                                        />
                                        </>
                                        )}
                                        </>
                                    )}
                                    {showLocation && (
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="Enter Your Location"
                                            className="introduction__input text-black placeholder:text-black"
                                        />
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="items-center flex mt-auto">
                            <div className="mr-auto flex-none flex-shrink basis-1/4 pr-2.5 text-color-color">
                                <button onClick={handleBack}>
                                    <span>BACK</span>
                                </button>
                            </div>
                            <div className="mr-auto flex-none flex-shrink basis-1/4 pr-2.5 text-color-color">
                                {!showLocation && name && (
                                    <button onClick={handleProceed} className="absolute right-0">
                                        <span className="order-1 flex-shrink-0 h-6 w-6">
                                            <span className="">
                                                <svg className="w-3 h-3 relative -top-1 left-1" viewBox="0 0 11 12" fill="#1A1B1C" xmlns="http://www.w3.org/2000/svg" role="img">
                                                    <path d="M10.145 6 .716 11.444V.556L10.145 6Z" fill="current"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="padding-right: 18px transition-transform duration-500 ease-custom-bezier">PROCEED</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
      </div>
    </>
  );
}

export default Introduction;