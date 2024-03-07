import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/app/dashboard", { replace: true, state: "this is dummy data" });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
