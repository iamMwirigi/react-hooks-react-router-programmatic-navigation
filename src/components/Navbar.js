import { useHistory } from "react-router-dom";

function NavBar({ onLogout }) {
  const history = useHistory();

  function handleClick() {
    // logout the user
    onLogout();
    // then navigate them to the login page
    history.push("/login");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
}