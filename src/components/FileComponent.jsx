import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { FiDownload, FiEye, FiLink2 } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { formatFileSize, getFileExtensionFromMimeType } from "../utils";

const FileComponent = ({ file, cancel, link, loading }) => {
  function downloadFile(url, fileName) {
    fetch(url, { method: "get", referrerPolicy: "no-referrer" })
      .then((res) => {
        return res.blob();
      })
      .then(async res => {
        const mimeType = await res.type;
        const extension = getFileExtensionFromMimeType(mimeType);
        console.log(res.type);

        if (!extension) {
          console.error("Unsupported file type");
          return;
        }
        const fileName = `download-${Date.now()}${extension}`;
        const aElement = document.createElement("a");
        aElement.setAttribute("download", fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute("target", "_blank");
        aElement.click();
        URL.revokeObjectURL(href);
      });
  }

  return (
    <div className="flex items-center justify-between w-full border-[1px] border-black/[20%] p-3 rounded-md relative">
      {link && (
        <div className="absolute rounded-md left-0 top-0 bg-white/90 w-full h-full z-20 flex items-center justify-center gap-x-5">
          <div
            data-tooltip-id="app-title"
            onClick={() => navigator.clipboard.writeText(link)}
            className="flex items-center gap-x-2 cursor-pointer active:opacity-40 transition-[1]"
          >
            <FiLink2 />
            <p className="text-sm">Copy Link</p>
          </div>
          {/* <a className="hidden" id="downloadLink" href={link}>
            Download File
          </a> */}
          {/* <a
            href={link}
            target="_blank"
            className="flex items-center gap-x-2 cursor-pointer active:opacity-40 transition-[1]"
          >
            <FiEye />
            <p className="text-sm">View</p>
          </a> */}
          <div
            onClick={() => downloadFile(link, "file.json")}
            className="flex items-center gap-x-2 cursor-pointer active:opacity-40 transition-[1]"
          >
            <FiDownload />
            <p className="text-sm">Download</p>
          </div>
        </div>
      )}
      <div className="flex items-center gap-x-3 overflow-hidden  max-md:w-[70%]">
        <CgFileDocument color="rgba(0,0,0,0.7)" size={30} />
        <div className=" w-[90%] max-md:w-[70%]">
          <p className="text-sm font-semibold truncate">{file.name}</p>
          <p className="text-[13px] opacity-75">{formatFileSize(file.size)}</p>
        </div>
      </div>
      <ReactTooltip
        id="app-title"
        place="top"
        content="Copied!"
        className="bg-black z-30 text-sm"
        openOnClick={true}
      />
      <button
        disabled={loading}
        className="cursor-pointer disabled:opacity-50"
        onClick={() => cancel()}
      >
        <MdClose color="red" size={19} />
      </button>
    </div>
  );
};

export default FileComponent;
