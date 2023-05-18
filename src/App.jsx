import { useRef, useState } from "react";
import "./App.css";
import { FiUploadCloud } from "react-icons/fi";
import FileComponent from "./components/FileComponent";
import { BeatLoader } from "react-spinners";
import {IoIosInfinite} from "react-icons/io"

function App() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [link, setLink] = useState(null);
  const fileRef = useRef();

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("image", file);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    try {
      setLoading(true);
      await fetch("https://pysavant-dstorage.cyclic.app/upload", {
        method: "POST",
        body: formData,
      }).then(async (res) => {
        const data = await res.json();
        setLink(data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const retrieveFile = async (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <section>
      <div className="main relative">
        <div className="gradient" />
        <p className=" absolute bottom-5 text-sm z-[999999] text-[#111]">With ❤️ from <a href="https://instagram.com/@_pysavant.codes" className=" cursor-pointer" target="_blank">Pysavant Codes</a></p>
      </div>
      <main className="relative z-10 flex items-center w-full mx-auto sm:px-16 px-6 h-[90vh]">
        <div className="w-full">
          <h1 className="text-[40px] flex items-center justify-center text-center font-[900] gap-x-2 max-md:text-[35px]">
            Infiniti<IoIosInfinite/>Vault
          </h1>
          <p className="text-black/70 text-center">
            Store your files in the vast{" "}
            <span className="text-black font-semibold">IPFS</span> network
          </p>
          <div className="bg-white p-6 max-md:p-5 border-[1px] border-black/10 rounded-lg mt-4 max-w-[600px] mx-auto">
            {file ? (
              <FileComponent
                link={link}
                file={file}
                cancel={() => setFile(null)}
                loading={loading}
              />
            ) : (
              <buttton
                onClick={() => {
                  fileRef.current.click();
                }}
                className="border-[2px] border-dashed border-black/10 p-5 flex flex-col items-center rounded-md cursor-pointer active:opacity-30 transition-[1]"
              >
                <FiUploadCloud size={70} className="opacity-[80%]" />
                <p className="text-sm opacity-90">
                  Click to select a file for upload
                </p>
              </buttton>
            )}

            <input
              ref={fileRef}
              type="file"
              onChange={retrieveFile}
              className="hidden"
            />
            {file && !link && (
              <button
                disabled={loading}
                className="bg-black text-white p-3 w-full mt-3 rounded-md border-[1px] disabled:animate-pulse"
                onClick={() => uploadFile()}
              >
                {loading ? (
                  <BeatLoader
                    size={11}
                    color="white"
                    className="flex items-center justify-center"
                  />
                ) : (
                  "Upload"
                )}
              </button>
            )}
            {link && (
              <p
                onClick={() => {
                  setFile(null);
                  setLink(null);
                }}
                className="mt-4 text-sm underline cursor-pointer w-fit"
              >
                Upload again!
              </p>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
