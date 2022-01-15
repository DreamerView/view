const LoginForm = () => {
    return(
        <div className="m">
  <div className="join-text-place">
    <h1 className="m-p">Войти с помощью</h1>
    <h1 className="m-p-content">У вас нет аккаунта? <button className="regis-green">Зарегистрироваться</button></h1>
  </div>
  <div className="main-four-blocks-place">
      <div className="place-three-blocks">
        <div className="first-block-in">
          <h1 className="electron-addres">Электронный адрес</h1>
          <div className="place-input-in">
            <input type="email" placeholder="name@example.com" className="none-border" />
          </div>
          <div>
            <h1 className="electron-addres">Пароль</h1>
            <div className="place-input-in">
              <input type="password" placeholder="********************" className="none-border" />
              
            </div>
          </div>
          <div className="place-button-in">
            <button className="button-join-in">
              ВОЙТИ
            </button>
          </div>
        </div>
        <div className="second-block-in">
          <div className="vertical-stick" />
          <div className="place-or">
            <h1 className="or">ИЛИ</h1>
          </div>
          <div className="vertical-stick" />
        </div>
        <div className="third-block-in">
          <div className="place-google-apple-facebook">
            <button className="google">
              <div className="place-img-in-button">
                <img className="img-in-button" src={`${process.env.PUBLIC_URL}/login-images/Google__G__Logo.svg.png`} alt="Google" /> 
              </div>
              Войти через Google
            </button>
          </div>
          <div className="place-google-apple-facebook">
            <button className="google">
              <div className="place-img-in-button">
                <img className="img-in-button" src={`${process.env.PUBLIC_URL}/login-images/Apple_logo_black.svg.png`} alt="Apple" /> 
              </div>
              Войти через Apple
            </button>
          </div>
          <div className="place-google-apple-facebook">
            <button className="google">
              <div className="place-img-in-button">
                <img className="img-in-button" src={`${process.env.PUBLIC_URL}/login-images/facebook_logo_icon_147291.png`} alt="Facebook" /> 
              </div>
              Войти через Facebook
            </button>
          </div>
        </div>
        <div className="four-block-in">
          <div className="place-registration">
            <div className="place-secure-captcha">
              <h1 className="secure-captcha">Secure Login with reCAPTCHA subject to Google</h1>
              <h1 className="secure-privacy">Terms &amp; privacy</h1>
            </div>
          </div>       
        </div>
      </div>
  </div>
</div>
    );
};

export default LoginForm;