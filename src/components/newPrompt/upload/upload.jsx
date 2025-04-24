import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useRef } from "react";

const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/upload");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
const Upload = ({ setImage }) => {
  const ikUploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
    setImage((prev) => ({ ...prev, error: true }));
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImage((prev) => ({ ...prev, loading: false, data: res }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress", progress);
    setImage((prev) => ({ ...prev, loading: true }));
  };

  const onUploadStart = (evt) => {
    console.log("Start", evt);
  };
  return (
    <div className="upload">
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          useUniqueFileName={true}
          style={{ display: "none" }}
          ref={ikUploadRef}
        />
        <label onClick={() => ikUploadRef.current.click()}>
          <img src="/attachment.png" alt="attachment" />
        </label>
      </IKContext>
    </div>
  );
};

export default Upload;
