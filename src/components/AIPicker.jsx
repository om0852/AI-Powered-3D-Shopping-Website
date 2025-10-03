import React from "react";
import CustomButton from "./CustomButton";
const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        value={prompt}
        className="aipicker-textarea"
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI..."
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            title={"Asking AI..."}
            type="filled"
            customStyles={"text-xs"}
            // handleClick={handleSubmit}
          />
        ) : (
          <>
            <CustomButton
              type={"outline"}
              title={"AI Logo"}
              handleClick={() => handleSubmit("logo")}
              customStyles={"text-xs"}
            />
            <CustomButton
              type={"outline"}
              title={"AI Full"}
              handleClick={() => handleSubmit("full")}
              customStyles={"text-xs"}
            />
          </>
        )}
        <CustomButton
          title={generatingImg ? "Generating..." : "Generate"}
          type="filled"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AIPicker;
