import React, { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    document.title = props.titleStartBy + "Accueil";
  });
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home
