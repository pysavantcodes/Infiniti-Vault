export function getFileExtensionFromMimeType(mimeType) {
  switch (mimeType) {
    case "image/jpeg":
      return ".jpg";
    case "image/png":
      return ".png";
    case "image/gif":
      return ".gif";
    case "image/svg+xml":
      return ".gif";
    case "image/bmp":
      return ".bmp";
    case "image/webp":
      return ".webp";
    case "application/pdf":
      return ".pdf";
    case "application/zip":
      return ".zip";
    case "text/plain":
      return ".txt";
    case "text/csv":
      return ".csv";
    case "application/json":
      return ".json";
    case "application/xml":
      return ".xml";
    case "application/yaml":
      return ".yaml";
    case "application/msword":
      return ".doc";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return ".docx";
    case "application/vnd.ms-excel":
      return ".xls";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return ".xlsx";
    case "application/vnd.ms-powerpoint":
      return ".ppt";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return ".pptx";
    case "audio/mpeg":
      return ".mp3";
    case "audio/wav":
      return ".wav";
    case "video/mp4":
      return ".mp4";
    case "video/webm":
      return ".webm";
    case "video/mpeg":
      return ".mpeg";
    case "video/quicktime":
      return ".mov";
    default:
      return "";
  }
}

export function formatFileSize(bytes, decimalPoint) {
  if (bytes == 0) return "0 Bytes";
  var k = 1000,
    dm = decimalPoint || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export const stringTruncate = function (str, length) {
  var dots = str.length > length ? "..." : "";
  return str.substring(0, length) + dots;
};
