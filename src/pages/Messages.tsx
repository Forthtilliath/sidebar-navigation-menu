import { useTitle } from "../hooks/useTitle";

function Messages() {
  useTitle("Mes messages");
  return (
    <div className="messages">
      <h1>Messages</h1>
    </div>
  );
}

export default Messages;
