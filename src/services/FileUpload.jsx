import React, { useState } from 'react';
import axios from 'axios';

const NFTStorageUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState(null);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setCancelTokenSource(source);
    setUploading(true);

    const apiKey = `${import.meta.env.VITE_APP_UPLOAD_KEY}`;
    const apiUrl = 'https://api.nft.storage/upload';

    const formData = new FormData();
    formData.append('file', file);

    const config = {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(progress);
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'multipart/form-data',
      },
      cancelToken: source.token,
    };

    return new Promise((resolve, reject) => {
        axios.post(apiUrl, formData, config)
          .then((response) => {
            if (cancelTokenSource) {
              reject(new Error('Upload canceled by user.'));
            } else {
              setUploadResult(response.data);
              resolve(response.data);
            }
          })
          .catch((error) => {
            if (axios.isCancel(error)) {
              reject(new Error('Upload canceled by user.'));
            } else {
              reject(error);
            }
          })
          .finally(() => {
            setUploading(false);
            setCancelTokenSource(null);
          });
      });
  };

  const cancelUpload = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Upload canceled by user.');
    }
  };

  return {
    handleFileChange,
    handleUpload,
    file,
    uploading,
    uploadProgress,
    uploadResult,
    setFile,
    cancelUpload
  };
};

export default NFTStorageUploader;
