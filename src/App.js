import "./styles.css"


function App() {
  return (
    <div className="container">
      <div className="containerLogin">
        <div className="contentLogin">
          <form className="formLogin">

            <span className="loginTitle"> Bem Vindo</span>

            <div className="wrapInput">
              <input className="input" type="email"/>
              <span className="focusInput" data-placeholder="email"></span>
            </div>
            <div className="wrapInput">
              <input className="input" type="pswr"/>
              <span className="focusInput" data-placeholder="pswr"></span>
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
