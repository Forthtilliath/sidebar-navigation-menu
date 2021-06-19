import React, {useEffect} from "react";

function Messages(props) {
  useEffect(() => {
    document.title = props.titleStartBy + "Mes messages";
  });
  return (
    <div className="messages">
      <h1>Messages</h1>
    </div>
  );
}

export default Messages;
