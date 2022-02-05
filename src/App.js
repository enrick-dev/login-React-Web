import { useState } from "react";
import "./styles.css"


function App() {
  const [email, setEmail] = useState("")
  const [pswr, setPswr] = useState("")

  return (
    <div className="container">
      <div className="containerLogin">
        <div className="contentLogin">
          <form className="formLogin">

            <span className="loginTitle"> Bem Vindo</span>

            <div className="wrapInput">
              <input className={email !== "" ? "hasValue input" : "input "}               
              type="email" 
              value={email} onChange={e => setEmail(e.target.value)} />

              <span className="focusInput" data-placeholder="Email"></span>
            </div>


            <div className="wrapInput">
              <input className={pswr !== "" ? "hasValue input" : "input "}  
              type="pswr"
              value={pswr} onChange={e => setPswr(e.target.value)} />

              <span className="focusInput" data-placeholder="Senha"></span>
            </div>

            <div className="contentLoginBtn">
              <button className="loginBtn">Login</button>
            </div>
            
            <div className="contentText">
              <span className="text1">Não possui conta?</span>
              <a href="#" className="text2">Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
