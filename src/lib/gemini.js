import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_PUBLIC_KEY });

export default async function generate(text, setAns, setQuestion, setLoading) {
  setQuestion(text);
  setLoading(true);
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: text,
  });
  setAns(response.text);
  setLoading(false);
  //   console.log(response.text);
}
