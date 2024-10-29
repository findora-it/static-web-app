import { FunctionComponent, useEffect, useState } from "react";

export type FormType = {
  className?: string;
  onClose: () => void;
};

const Form: FunctionComponent<FormType> = ({ className = "", onClose }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    option: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const toggleOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const selectOption = (option: string) => {
    setFormData({ ...formData, option });
    setSelectedOption(option);
    setIsOptionOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const data = {
      access_key: "247f4231-3ac0-467c-be74-c9e18b09643e",
      ...formData,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form submitted successfully!");
      console.log("Success", res);
    } else {
      setResult("Failed to submit form.");
      console.log("Error", res);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ml:w-full">
      <form
        onSubmit={onSubmit}
        className={`w-[840px] my-[120px] bg-nero-1-findora box-border flex flex-col items-center justify-center py-[30px] px-[20px] border-[4px] border-solid border-nero-3-findora relative overflow-hidden flex flex-col items-center justify-center text-center text-45xl text-white font-gotham ${className} md:w-full md:h-full sm:overflow-y-scroll sm:pt-[2.125rem] ss:pt-[7rem] phone:pt-[15rem] xss:pt-[18rem]`}
      >
        <div className="self-stretch flex flex-col items-start justify-start py-[5px] relative gap-[35px]">
          <div className="self-stretch flex flex-row items-start justify-start z-[0]">
            <div className="flex-1 flex flex-col items-start justify-start py-[15px] gap-[30px]">
              <b className="relative self-stretch sm:text-3xl">
                LISTA D’ATTESA
              </b>
              <div className="relative self-stretch text-xl sm:hidden">
                <p>Entra e scopri un mondo di infinite opportunità</p>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] z-[1] text-left text-xl text-gray">
            <div className="w-[100%] flex flex-row md:flex-col ">
              <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border w-full sm:w-[370px] sm:px-[0rem] sm:w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome"
                  className="self-stretch bg-nero-3-findora box-border h-[60px] flex items-start justify-start py-0 px-[15px] border-[1px] border-solid border-bianco-1-findora"
                  required
                  style={{
                    color: "rgba(255, 255, 255, 0.50)",
                    fontFamily: "Gotham",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                  }}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border w-full sm:w-[370px] sm:px-[0rem] sm:w-full">
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Cognome"
                  className="self-stretch bg-nero-3-findora box-border h-[60px] flex items-start justify-start py-0 px-[15px] border-[1px] border-solid border-bianco-1-findora"
                  required
                  style={{
                    color: "rgba(255, 255, 255, 0.50)",
                    fontFamily: "Gotham",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                  }}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-5 px-[30px] box-border w-full sm:w-[370px] text-center text-base text-bianco-1-findora sm:px-[0rem] sm:w-full">
              <div
                className="self-stretch bg-verde-1-findora h-[60px] flex items-center justify-center py-0 px-[15px] box-border cursor-pointer relative"
                onClick={toggleOption}
              >
                <b className="relative flex items-center justify-center flex-1">
                  {selectedOption ? selectedOption : "SELEZIONA UNA OPZIONE +"}
                </b>
                {isOptionOpen && (
                  <div className="absolute top-[100%] left-0 right-0 bg-nero-3-findora z-10 border-solid border-bianco-1-findora">
                    <b
                      className="h-[60px] flex items-center justify-center cursor-pointer border-t border-bianco-1-findora"
                      onClick={() => selectOption("FREELENCER")}
                    >
                      FREELENCER
                    </b>
                    <b
                      className="h-[60px] flex items-center justify-center cursor-pointer border-t border-bianco-1-findora"
                      onClick={() => selectOption("UTENTE")}
                    >
                      UTENTE
                    </b>
                  </div>
                )}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border w-full sm:w-[370px] sm:px-[0rem] sm:w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="self-stretch bg-nero-3-findora box-border h-[60px] flex items-start justify-start py-0 px-[15px] border-[1px] border-solid border-bianco-1-findora"
                required
                style={{
                  color: "rgba(255, 255, 255, 0.50)",
                  fontFamily: "Gotham",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border w-full sm:w-[370px] sm:px-[0rem] sm:w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Condividi le tue aspettative, suggerimenti, feedback"
                className="self-stretch bg-nero-3-findora box-border h-[180px] flex items-start justify-start p-[15px] border-[1px] border-solid border-bianco-1-findora"
                required
                style={{
                  color: "rgba(255, 255, 255, 0.50)",
                  fontFamily: "Gotham",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border w-full sm:w-[370px] text-center text-13xl text-white sm:px-[0rem] sm:w-full">
              <button
                type="submit"
                className="self-stretch bg-verde-1-findora h-[60px] flex items-start justify-start py-0 px-[15px] box-border cursor-pointer"
              >
                <b
                  className="relative flex items-center self-stretch justify-center flex-1"
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontStyle: "normal",
                  }}
                >
                  SUBMIT
                </b>
              </button>
            </div>
          </div>
          {result && (
            <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border w-full sm:w-[370px] text-center text-13xl text-white">
              <p className="relative flex items-center self-stretch justify-center flex-1">
                {result}
              </p>
            </div>
          )}
          <div
            className="!m-[0] absolute top-[0px] right-[0px] flex flex-row items-start justify-start py-0 px-[30px] z-[2] cursor-pointer"
            onClick={onClose}
          >
            <img
              className="w-[30px] relative h-[30px]"
              alt="close"
              src="./xverde.svg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
