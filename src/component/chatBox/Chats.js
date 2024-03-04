import React from "react";

function Chats() {
  return (
    <>
      <div className="chat">
        <div className="userChat">
          <img
            style={{
              width: "14%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="data:image/jpeg;base64,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"
          />
          <div className="userchatInfo">
            <sapn className="name1">Moksh</sapn>
            <p className="paragraph">Hello</p>
          </div>
        </div>
        <div className="userChat">
          <img
            style={{
              width: "14%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="data:image/jpeg;base64,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"
          />
          <div className="userchatInfo">
            <sapn className="name1">Moksh</sapn>
            <p className="paragraph">Hello</p>
          </div>
        </div>
        <div className="userChat">
          <img
            style={{
              width: "14%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="data:image/jpeg;base64,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"
          />
          <div className="userchatInfo">
            <sapn className="name1">Moksh</sapn>
            <p className="paragraph">Hello</p>
          </div>
        </div>
        <div className="userChat">
          <img
            style={{
              width: "14%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="data:image/jpeg;base64,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"
          />
          <div className="userchatInfo">
            <sapn className="name1">Moksh</sapn>
            <p className="paragraph">Hello</p>
          </div>
        </div>
        <div className="userChat">
          <img
            style={{
              width: "14%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="data:image/jpeg;base64,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"
          />
          <div className="userchatInfo">
            <sapn className="name1">Moksh</sapn>
            <p className="paragraph">Hello</p>
          </div>
        </div>
    
        </div>
    </>
  );
}

export default Chats;