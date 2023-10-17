import { NFTStorage } from "nft.storage";

const nftStorage = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ0MEVBMkFlNDREQjRmZkUzMTY2MDQxMjAxQ2Y1RkM4ODQ3MDkxRDMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Njc4NDI3NjA1NCwibmFtZSI6InRlc3QifQ.OcHzQJRzwe1Ctzf2G-K9kgEaZ8TPME3su_lNs31t3Gg",
});

export const uploadSingleFile = async (file) => {
  if (file) {
    try {
      const content = new Blob([file]);
      const cid = await nftStorage.storeBlob(content);
      return `https://${cid}.ipfs.w3s.link`;
    } catch (error) {
      throw new Error("An Error Occured while uploading");
    }
  }
};

// const uploadFile = async () => {
//     const formData = new FormData();
//     formData.append("image", file);
//     try {
//       setLoading(true);
//       await fetch("https://pysavant-dstorage.cyclic.app/upload", {
//         method: "POST",
//         body: formData,
//       }).then(async (res) => {
//         const data = await res.json();
//         setLink(data);
//         setLoading(false);
//       });
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };


// function downloadFile(url, fileName) {
//     fetch(url, { method: "get", referrerPolicy: "no-referrer" })
//       .then((res) => {
//         return res.blob();
//       })
//       .then(async res => {
//         const mimeType = await res.type;
//         const extension = getFileExtensionFromMimeType(mimeType);
//         console.log(res.type);

//         if (!extension) {
//           console.error("Unsupported file type");
//           return;
//         }
//         const fileName = `download-${Date.now()}${extension}`;
//         const aElement = document.createElement("a");
//         aElement.setAttribute("download", fileName);
//         const href = URL.createObjectURL(res);
//         aElement.href = href;
//         aElement.setAttribute("target", "_blank");
//         aElement.click();
//         URL.revokeObjectURL(href);
//       });
//   }