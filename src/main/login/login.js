const LoginForm = () => {
    return(
        <div className="m">
          <div className="m-block">
            <h1 className="m-p">Добро пожаловать</h1>
            <h1 className="m-p-content">У вас нет аккаунта? <a className="m-p-content-url" href="s">Зарегистрируйтесь</a></h1>
            <div className="login-form">
              <div className="login-form-content">
                <div className="login-form-content-part">
                  <input type="text" placeholder="Телефон или email" className="login-form-content-input" />
                  <input type="text" placeholder="Пароль" className="login-form-content-input" />
                  <button type="button" className="login-form-content-button">Войти</button>
                  <a href="s" className="login-form-content-forget">Забыли пароль?</a>
                </div>
              </div>
              <div className="login-form-select">
                <div className="login-form-select-border"/>
                <h1 className="login-form-select-text">или</h1>
                <div className="login-form-select-border"/>
              </div>
              <div className="login-form-content">
                <div className="login-form-content-part-1">
                  <button type="button" className="login-form-content-sn">
                    <div className="login-form-content-sn-content">
                    <div className="login-form-content-sn-picture">
                      <img src={process.env.PUBLIC_URL+"/login-images/Google__G__Logo.svg.png"} className="login-form-content-sn-image" alt="social"/>
                    </div>
                    <span className="login-form-content-sn-text">Войти через Google</span>
                    </div>
                  </button>
                  <button type="button" className="login-form-content-sn">
                    <div className="login-form-content-sn-content">
                    <div className="login-form-content-sn-picture">
                      <img src={process.env.PUBLIC_URL+"/login-images/facebook_logo_icon_147291.png"} className="login-form-content-sn-image" alt="social"/>
                    </div>
                    <span className="login-form-content-sn-text">Войти через Facebook</span>
                    </div>
                  </button>
                  <button type="button" className="login-form-content-sn">
                    <div className="login-form-content-sn-content">
                    <div className="login-form-content-sn-picture">
                      <img src={process.env.PUBLIC_URL+"/login-images/Apple_logo_black.svg.png"} className="login-form-content-sn-image" alt="social"/>
                    </div>
                    <span className="login-form-content-sn-text">Войти через Apple</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default LoginForm;