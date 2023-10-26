import { useTitle } from "../hooks/useTitle";

function NotFound() {
  useTitle("Page introuvable");
  return (
    <div className="notfound">
      <h1>NotFound</h1>
    </div>
  );
}

export default NotFound;
