import { useTitle } from "../hooks/useTitle";

function Reports() {
  useTitle("Liste des rapports");
  return (
    <div className="reports">
      <h1>Reports</h1>
    </div>
  );
}

export default Reports;
