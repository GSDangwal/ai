import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "./upload/upload";
import { IKImage } from "imagekitio-react";
import generate from "../../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(null);
  const [image, setImage] = useState({
    loading: false,
    error: "",
    data: "",
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    if (!text) return;
    generate(text, setAns, setQuestion, setLoading);
  };
  return (
    <>
      {image.data.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          path={image.data.filePath}
          width={380}
          transformation={[{ width: "300px" }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {loading && <h1>Loading...</h1>}
      {image.loading && <div>Loading...</div>}
      {ans && (
        <div className="message">
          <Markdown>{ans}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endRef}></div>
      <form onSubmit={handleSubmit} className="newForm">
        <Upload setImage={setImage} />
        <input type="file" id="file" multiple={false} hidden />

        <input type="text" name="text" />

        <button type="submit">
          <img src="/arrow.png" alt="send" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
