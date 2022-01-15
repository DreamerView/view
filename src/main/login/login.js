const LoginForm = () => {
    return(
        <div className="m">
  <div className="join-text-place">
    <h1 className="join-text">Войти с помощью</h1>
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
            <h1 className="or">OR</h1>
          </div>
          <div className="vertical-stick" />
        </div>
        <div className="third-block-in">
          <div className="place-google-apple-facebook">
            <button className="google">
              <div className="place-img-in-button">
                <img className="img-in-button" src={`${process.env.URL_STATE}/login-images/Google__G__Logo.svg.png`} alt="Google" /> 
              </div>
              Войти через Google
            </button>
          </div>
          <div className="place-google-apple-facebook">
            <button className="google">
              <div className="place-img-in-button">
                <img className="img-in-button" src={`${process.env.URL_STATE}/login-images/Apple_logo_black.svg.png`} alt="Apple" /> 
              </div>
              Войти через Apple
            </button>
          </div>
          <div className="place-google-apple-facebook">
            <button className="google">
              <div className="place-img-in-button">
                <img className="img-in-button" src={`${process.env.URL_STATE}/login-images/facebook_logo_icon_147291.png`} alt="Facebook" /> 
              </div>
              Войти через Facebook
            </button>
          </div>
        </div>
        <div className="four-block-in">
          <div className="place-registration">
            <h1 className="regis-text">У вас нет аккаунта? <button className="regis-green">Зарегистрироваться</button></h1>
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