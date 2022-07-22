import React, { useState } from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaBlackberry,
  FaFly,
  FaFontAwesomeFlag,
  FaFulcrum,
  FaGalacticRepublic,
  FaGrunt,
  FaIoxhost,
  FaJava,
  FaLaravel,
  FaMedapps,
} from "react-icons/fa";

export default function SideBar() {
  const [show, setShow] = useState(null);
  return (
    <div className="bg-gray-200 h-max w-max">
      <nav className={show ? "w-64" : "w-20 "}>
        <div className=" px-6 w-20 h-full  flex flex-col items-center bg-[#222222] fixed top-0 z-40">
          <div className="relative">
            <div
              id="menu"
              className={
                show
                  ? "w-5 h-7 flex justify-center items-center text-white bg-[#222222] rounded-r-lg absolute top-[100px] left-[215px]"
                  : "w-5 h-7 flex justify-center items-center text-white bg-[#222222] rounded-r-lg absolute top-[100px] left-[35px]"
              }
              onClick={() => setShow(!show)}
            >
              {show ? (
                <FaAngleLeft className="text-white text-xl" />
              ) : (
                <FaAngleRight className="text-white text-xl" />
              )}
            </div>
          </div>
          <div className="">
            <ul className="f-m-m">
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaBlackberry className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaFly className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaFontAwesomeFlag className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaFulcrum className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaGalacticRepublic className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaGrunt className="text-xl" />
                  </div>
                </div>
              </li>
            </ul>{" "}
            <ul>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaIoxhost className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5 ">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaJava className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaLaravel className="text-xl" />
                  </div>
                </div>
              </li>
              <li className="text-white pt-5">
                <div className="flex items-center">
                  <div className="w-5 h-5 md:w-8 md:h-8 ">
                    <FaMedapps className="text-xl" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <p className="text-white font-bold">#171717</p>
        </div>

        <div
          className={show ? " w-full h-full " : " hidden w-full h-full z-40"}
          id="mobile-nav"
        >
          <div
            className="bg-[#222222] opacity-50 w-64 h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-[#222222] shadow h-full flex-col justify-between  pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <p className="text-base  text-white ml-3">The North</p>
                      </div>
                      <div
                        id="cross"
                        className="text-white"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <li className="text-white pt-5">
                      <div className="flex items-center">
                        <div className="w-4 h-4 md:w-5 md:h-5 text-indigo-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                        </div>
                        <p className="text-indigo-700 xl:text-base text-base ml-3">
                          Dashboard
                        </p>
                      </div>
                    </li>

                    <li className="text-white pt-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 md:w-5 md:h-5 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-puzzle"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                          </div>
                          <p className="text-white xl:text-base  text-base ml-3">
                            Products
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="text-white pt-8">
                      <div className="flex items-center">
                        <div className="w-4 h-4 md:w-5 md:h-5 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-compass"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx={12} cy={12} r={9} />
                          </svg>
                        </div>
                        <p className="text-white xl:text-base  text-base ml-3">
                          Performance
                        </p>
                      </div>
                    </li>

                    <li className="text-white pt-8 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 md:w-5 md:h-5 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-code"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="7 8 3 12 7 16" />
                              <polyline points="17 8 21 12 17 16" />
                              <line x1={14} y1={4} x2={10} y2={20} />
                            </svg>
                          </div>
                          <p className="text-white xl:text-base  text-base ml-3">
                            Deliverables
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full pt-4">
                  <div className="flex justify-center mb-4 w-full">
                    <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-search"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </div>
                      <input
                        className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-700">
                    <div className="w-full flex items-center justify-between pt-1">
                      <div className="flex items-center">
                        <img
                          alt="profile-pic"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                          className="w-8 h-8 rounded-md"
                        />
                        <p className=" text-white text-base leading-4 ml-2">
                          Jane Doe
                        </p>
                      </div>
                      <ul className="flex">
                        <li className="cursor-pointer text-white pt-5 pb-3">
                          <div className="w-4 h-4 md:w-5 md:h-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-messages"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                            </svg>
                          </div>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                          <div className="w-4 h-4 md:w-5 md:h-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-bell"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
