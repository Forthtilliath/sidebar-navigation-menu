import React, { useEffect } from "react";

function NotFound(props) {
  useEffect(() => {
    document.title = props.titleStartBy + "Page introuvable";
  });
  return (
    <div className="notfound">
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
