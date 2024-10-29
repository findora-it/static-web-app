import { FunctionComponent } from "react";

export type ListaDattesaType = {
  className?: string;
};

const ListaDattesa: FunctionComponent<ListaDattesaType> = ({
  className = "",
}) => {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeHanTUx1TcehFPSkBCR4cOxOfX9pzM7Ey33e1lWjPM03qQxg/viewform";

  const googleForm = () => {
    window.open(formLink, "_blank");
  };

  return (
    <div
      className={` cursor-pointer self-stretch flex flex-col items-center justify-center text-center text-[4rem] text-white font-gotham ${className}`}
    >
      <div
        className="self-stretch bg-verde-1-findora h-[11.25rem] flex flex-row items-center justify-center"
        onClick={googleForm}
      >
        <b className="relative flex items-center self-stretch justify-center flex-1 md:text-[3rem]">
          LISTA D’ATTESA
        </b>
      </div>
    </div>
  );
};

export default ListaDattesa;
