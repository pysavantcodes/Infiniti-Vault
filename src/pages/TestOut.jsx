import { useEffect, useRef, useState } from "react";
import {
  Button,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import { formatFileSize, stringTruncate } from "../helpers/utils";
import { Tooltip as ReactTooltip } from "react-tooltip";
import NFTStorageUploader from "../services/FileUpload";
import toast from "react-hot-toast";

const TestOut = () => {
  const {
    handleFileChange,
    handleUpload,
    file,
    uploading,
    uploadProgress,
    uploadResult,
    cancelUpload,
    setFile,
  } = NFTStorageUploader();
  const [uploadMode, setUploadMode] = useState("file");
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const uploadFile = () => {
    setLoading(true);
    handleUpload()
      .then(() => {
        setFile(null);
        setLoading(false);
        toast.success('File Uploaded Successfully!');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <section className="max-w-[1300px] mx-auto px-10 py-5 max-md:px-8">
      <h1 className="text-[2.3rem] max-md:text-[2rem] font-black">Try Out!</h1>
      <p className="opacity-60">
        Have a sneak peak on how unique Infiniti Vault works.
      </p>
      <div className="flex my-10 max-md:flex-col md:mt-20">
        <div className="w-[50%] max-md:w-full max-md:flex items-center justify-center">
          <p
            onClick={() => setUploadMode("file")}
            className={`py-12 border-l-[1px] ${
              uploadMode == "file"
                ? "border-l-[#b9ff66] max-md:border-b-[#b9ff66]"
                : "border-l-white/[15%] max-md:border-b-white/[15%]"
            } px-7 cursor-pointer font-semibold hover:text-gray-400 max-md:border-l-0 max-md:text-sm max-md:border-b-[1px] max-md:py-4 max-md:px-3`}
          >
            Single File Upload
          </p>
          <p
            // onClick={() => setUploadMode("web")}
            className={`py-12 border-l-[1px] ${
              uploadMode == "web"
                ? "border-l-[#b9ff66] max-md:border-b-[#b9ff66]"
                : "border-l-white/[15%] max-md:border-b-white/[15%]"
            } px-7 font-semibold max-md:border-l-0 max-md:border-b-[1px] max-md:py-4 max-md:px-3 opacity-50 max-md:text-sm`}
          >
            Static Web Hosting
            <span className="text-[#b9ff66] text-[12px] ml-2">Beta</span>
          </p>
        </div>
        <div className="w-[50%] max-md:w-full max-md:mt-10">
          <div
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              if (
                e.dataTransfer.files.length > 0 &&
                e.dataTransfer.files[0].type !== ""
              ) {
                handleFileChange(e);
              }
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setDragOver(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            className={`p-10 border-[2px] h-[200px] ${
              dragOver ? "bg-white/10" : ""
            } border-white/[15%] rounded-lg border-dashed w-full flex items-center mb-5`}
          >
            {file ? (
              <div className="text-center w-full flex flex-col items-center gap-y-2">
                {file && !loading && (
                  <p className="max-md:mb-2">1 file ready for upload</p>
                )}
                {loading && (
                  <Progress
                    aria-label="Loading..."
                    value={uploadProgress}
                    isIndeterminate={uploadProgress == 100 ? true : false}
                    classNames={{
                      base: "w-full my-2",
                      track: "drop-shadow-md border-none",
                      indicator: "bg-gradient-to-r from-[#b9ff66] to-[#b9ff66]",
                      label: "text-default-600",
                      value: "text-foreground/60",
                    }}
                    label={
                      uploadProgress == 100 ? "Finalizing Upload" : "Uploading"
                    }
                    size="sm"
                    color="#b9ff66"
                    showValueLabel={true}
                  />
                )}
                <div className="flex items-center gap-x-3 max-md:flex-col gap-y-3">
                  {file && !loading && (
                    <Button
                      isLoading={loading}
                      onClick={() => uploadFile()}
                      className="bg-[#b9ff66]/10 text-[#b9ff66]"
                    >
                      <IoCloudUploadOutline size={19} />
                      Upload File
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      file && !loading ? setFile(null) : cancelUpload();
                    }}
                    className="bg-[#DC3545]/10 text-[#DC3545]"
                  >
                    <IoClose size={19} />
                    {file && !loading ? "Remove File" : "Cancel Upload"}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="flex text-center justify-center items-center gap-x-2 max-md:flex-col gap-y-2 w-full">
                  <span className="flex items-center gap-x-2">
                    <IoCloudUploadOutline size={24} className="mr-1" />
                    Drag and drop or
                  </span>
                  <Button
                    onClick={() => fileRef.current.click()}
                    className="bg-[#b9ff66]/10 text-[#b9ff66]"
                  >
                    Select from your device
                  </Button>
                </p>
                <input
                  ref={fileRef}
                  type="file"
                  onChange={(e) => handleFileChange(e)}
                  className="hidden"
                />
              </>
            )}
          </div>
          <ReactTooltip
            id="app-title"
            place="top"
            content="Copied!"
            className="bg-black z-30 text-sm"
            openOnClick={true}
          />
          {uploadResult && (
            <Table
              className="!bg-black"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Size</TableColumn>
                <TableColumn>Link</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <p className="line-clamp-1">
                      {stringTruncate(uploadResult.value.files[0].name, 10)}
                    </p>
                  </TableCell>
                  <TableCell>
                    {formatFileSize(uploadResult.value.size, 1)}
                  </TableCell>
                  <TableCell>
                    <Button
                      data-tooltip-id="app-title"
                      className="text-sm bg-transparent p-0"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `https://${uploadResult.value.cid}.ipfs.w3s.link/${uploadResult.value.files[0].name}`
                        )
                      }
                    >
                      Copy Link
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestOut;
