import React, { useEffect } from "react";

function Team(props) {
  useEffect(() => {
    document.title = props.titleStartBy + "Equipe";
  });
  return (
    <div className="team">
      <h1>Team</h1>
    </div>
  );
}

export default Team
