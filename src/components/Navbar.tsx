import { FunctionComponent, useCallback, useState } from "react";
import Form from "./Form"; // Assicurati che il percorso del componente Form sia corretto
import { IoMenuSharp } from "react-icons/io5";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [nav, setNav] = useState(false);

  const scrollToSection = useCallback((section: string) => {
    const anchor = document.querySelector(`[data-scroll-to='${section}']`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeHanTUx1TcehFPSkBCR4cOxOfX9pzM7Ey33e1lWjPM03qQxg/viewform";

  const toggleForm = () => {
    // setShowForm(!showForm);
    window.open(formLink, "_blank");
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleNavAndScroll = (section: string) => {
    handleNav(); // Chiudi il menu di navigazione
    scrollToSection(section); // Scorrimento alla sezione specificata
  };

  return (
    <div
      className={`flex flex-row items-center justify-start z-50 text-center text-17xl text-white font-gotham ${className} md:justify-between md:h-[60px] `}
    >
      <div
        className="self-stretch flex flex-row items-center justify-center py-0 px-[60px] cursor-pointer sm:pl-[30px]"
        onClick={() => scrollToSection("presentazione")}
      >
        <b className="relative sm:text-[24px]">Findora</b>
      </div>

      {/* TASTI DELLA NAVBAR */}
      <div className="flex-1 h-[60px] overflow-hidden flex flex-row items-center justify-end gap-[10px] text-xl md:hidden">
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
          <div
            className="self-stretch flex flex-row items-center justify-center p-2.5 cursor-pointer"
            onClick={() => toggleNavAndScroll("benefit")}
          >
            <div className="relative font-medium">Benefit</div>
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-center p-2.5 cursor-pointer"
            onClick={() => toggleNavAndScroll("come-funziona")}
          >
            <div className="relative font-medium">Come funziona</div>
          </div>
          <div
            className="flex flex-row items-center justify-center p-2.5 cursor-pointer"
            onClick={() => toggleNavAndScroll("mission")}
          >
            <div className="relative font-medium">Mission</div>
          </div>
          <div
            className="self-stretch flex flex-col items-center justify-center p-2.5 cursor-pointer"
            onClick={() => toggleNavAndScroll("faq")}
          >
            <div className="relative font-medium">F.A.Q.</div>
          </div>
        </div>
        <div
          className="self-stretch bg-verde-1-findora flex flex-row items-center justify-center py-0 px-[60px] text-5xl cursor-pointer"
          onClick={toggleForm}
        >
          <b className="relative">LISTA D’ATTESA</b>
        </div>
      </div>

      <div onClick={handleNav} className="pr-[2rem] lg:hidden sl:hidden">
        {!nav ? (
          <IoMenuSharp size={40} />
        ) : (
          <img
            className="w-[30px] relative h-[30px]"
            alt="close"
            src="./public/xbianco.svg"
          />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[50%] h-[100vh] mt-0 border-[4px] border-solid border-nero-3-findora bg-nero-1-findora list-none pl-0 z-50 ease-in-out duration-500 lg:hidden sm:w-full sm:border-none"
            : "border-[4px] border-solid border-nero-3-findora list-none fixed right-[-100%] pl-0 lg:hidden sm:hidden  "
        }
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-end items-center h-[50px] border-b-[4px] border-solid border-nero-3-findora sm:bg-nero-3-findora sm:h-[60px] sm:justify-between">
              <b
                onClick={() => toggleNavAndScroll("presentazione")}
                className="text-[24px] px-[30px] phone:hidden"
              >
                Findora
              </b>
              <img
                className="w-[30px] relative h-[30px] pr-[2rem]"
                alt="close"
                src="./xbianco.svg"
                onClick={handleNav}
              />
            </div>
            <div
              onClick={() => toggleNavAndScroll("benefit")}
              className="self-stretch text-left pl-[45px] pr-[30px] sm:pl-[30px]"
            >
              <div className="flex flex-row justify-between items-center py-[15px]">
                <p className="font-bold font-gotham text-[3rem] m-0 ml:text-[2.25rem] sm:text-[2rem]">
                  BENEFIT
                </p>
                <img
                  className="h-[30px] w-[30px] object-contain sm:h-[20px]"
                  alt=""
                  src="./triangolo.svg"
                />
              </div>
            </div>
            <div
              onClick={() => toggleNavAndScroll("come-funziona")}
              className="self-stretch text-left pl-[45px] pr-[30px] sm:pl-[30px]"
            >
              <div className="flex flex-row justify-between items-center py-[15px]">
                <p className="font-bold font-gotham text-[3rem] m-0 ml:text-[2.25rem] sm:text-[2rem]">
                  COME FUNZIONA
                </p>
                <img
                  className="h-[30px] w-[30px] object-contain sm:h-[20px]"
                  alt=""
                  src="./triangolo.svg"
                />
              </div>
            </div>
            <div
              onClick={() => toggleNavAndScroll("mission")}
              className="self-stretch text-left pl-[45px] pr-[30px] sm:pl-[30px]"
            >
              <div className="flex flex-row justify-between items-center py-[15px]">
                <p className="font-bold font-gotham text-[3rem] m-0 ml:text-[2.25rem] sm:text-[2rem]">
                  MISSION
                </p>
                <img
                  className="h-[30px] w-[30px] object-contain sm:h-[20px]"
                  alt=""
                  src="./triangolo.svg"
                />
              </div>
            </div>
            <div
              onClick={() => toggleNavAndScroll("faq")}
              className="self-stretch text-left pl-[45px] pr-[30px] sm:pl-[30px]"
            >
              <div className="flex flex-row justify-between items-center py-[15px]">
                <p className="font-bold font-gotham text-[3rem] m-0 ml:text-[2.25rem] sm:text-[2rem]">
                  F.A.Q.
                </p>
                <img
                  className="h-[30px] w-[30px] object-contain sm:h-[20px]"
                  alt=""
                  src="./triangolo.svg"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="h-[30px] border-y-[4px] border-solid border-nero-3-findora" />
            <div
              className="flex justify-center items-center  h-[120px] bg-verde-1-findora "
              onClick={toggleForm}
            >
              <p className="font-bold text-[48px] ml:text-[36px] sm:text-[2rem]">
                LISTA D'ATTESA
              </p>
            </div>
            <div className="h-[30px] border-y-[4px] border-solid border-nero-3-findora" />
          </div>
        </div>
      </div>

      {nav && (
        <div className="fixed inset-0 z-40 bg-black opacity-75 lg:hidden sm:hidden"></div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="relative z-50">
            <Form onClose={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
