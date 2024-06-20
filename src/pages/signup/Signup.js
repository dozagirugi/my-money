import { useState } from "react";
import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const { signup, error, isPending } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles["signup-form"]}>
        <h2>Signup</h2>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <span>password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <span>name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        {/* 가입 진행 중일 경우에는 로딩 버튼만 나옴 */}
        {!isPending && <button className="btn">가입</button>}
        {isPending && (
          <button classNAme="btn" disabled>
            loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
