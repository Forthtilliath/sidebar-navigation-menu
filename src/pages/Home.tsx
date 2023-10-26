import { useTitle } from "../hooks/useTitle";

function Home() {
  useTitle("Accueil");
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
