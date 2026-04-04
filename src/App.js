import React, { useState } from "react";

const hairstyles = {
  male: {
    oval: ["Quiff", "Pompadour", "Fade"],
    round: ["Side Part", "Spiky"],
  },
  female: {
    oval: ["Long Waves", "Layered Cut"],
    round: ["Ponytail", "Bob Cut"],
  },
};

const images = {
  Quiff: "https://via.placeholder.com/100?text=Quiff",
  Pompadour: "https://via.placeholder.com/100?text=Pompadour",
  Fade: "https://via.placeholder.com/100?text=Fade",
  "Side Part": "https://via.placeholder.com/100?text=Side+Part",
  Spiky: "https://via.placeholder.com/100?text=Spiky",
  "Long Waves": "https://via.placeholder.com/100?text=Long+Waves",
  "Layered Cut": "https://via.placeholder.com/100?text=Layers",
  Ponytail: "https://via.placeholder.com/100?text=Ponytail",
  "Bob Cut": "https://via.placeholder.com/100?text=Bob",
};

export default function App() {
  const [step, setStep] = useState("gender");
  const [gender, setGender] = useState("");
  const [face, setFace] = useState("");
  const [style, setStyle] = useState("");

  const current = (hairstyles[gender] && hairstyles[gender][face]) || [];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {step === "gender" && (
        <div>
          <h2>Select Gender</h2>
          <button
            onClick={() => {
              setGender("male");
              setStep("face");
            }}
          >
            Male
          </button>
          <button
            onClick={() => {
              setGender("female");
              setStep("face");
            }}
          >
            Female
          </button>
        </div>
      )}

      {step === "face" && (
        <div>
          <h2>Select Face Shape</h2>
          <button
            onClick={() => {
              setFace("oval");
              setStep("result");
            }}
          >
            Oval
          </button>
          <button
            onClick={() => {
              setFace("round");
              setStep("result");
            }}
          >
            Round
          </button>
        </div>
      )}

      {step === "result" && (
        <div>
          <h2>Hairstyles</h2>
          {current.map((s, i) => (
            <div
              key={i}
              onClick={() => setStyle(s)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              <img src={images[s]} alt={s} />
              <p>{s}</p>
            </div>
          ))}

          {style && (
            <div>
              <h3>Selected: {style}</h3>
              <img src={images[style]} alt="selected" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
