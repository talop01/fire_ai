import React from "react";
import { useState } from "react";
import {
  InferenceContext,
  InferenceResult,
  PhotoCollector
} from "landingai-react";

const apiInfo = {
  endpoint: `https://predict.app.landing.ai/inference/v1/predict?endpoint_id=f225a1ff-767e-491e-bdb5-c6bbfc614b9b`,
  key: "land_sk_XF60wsttJ1bUmkn0FGXPtWARcZ6pWGlDDHsKO9XQBzb9pgLEjs"
};

export default function App() {
  const [image, setImage] = useState();

  return (
    <InferenceContext.Provider value={apiInfo}>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img
          src="https://th.bing.com/th?id=OIP.a63LyzsEhLF4cIq2Yda66gHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          width={30}
        />
        <h1>Fire AI</h1>
      </div>
      <PhotoCollector setImage={setImage} />
      <InferenceResult image={image} />
      <p style={{ textAlign: "center" }}>
        Powered by <b>NoMindBhutan</b>
      </p>
    </InferenceContext.Provider>
  );
}
