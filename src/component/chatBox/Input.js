import React from "react";
import file from "../../image/avatar.png";

function Input() {
  return (
    <>
      <div className="input">
        <input
          className="message"
          type="text"
          placeholder="Enter your message here..."
        />
        <div className="send">
          <img
            alt=""
            src={file}
            style={{
              width: "14%",
              paddingLeft: "40%",
              height: "5%",
              objectFit: "cover",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          <input type="file" style={{ display: "none", id: "file" }} />
          <label htmlFor="file">
            <img
              style={{
                width: "75%",
                height: "55%",
                objectFit: "cover",
                borderRadius: "50%",
                cursor: "pointer"
              }}
              alt=""
              src={file}
            />
          </label>
          <button className="btn">Send</button>
        </div>
      </div>
    </>
  );
}

export default Input;
