import React, { useEffect } from "react";

function Support(props) {
  useEffect(() => {
    document.title = props.titleStartBy + "Support";
  });
  return (
    <div className="support">
      <h1>Support</h1>
    </div>
  );
}

export default Support
