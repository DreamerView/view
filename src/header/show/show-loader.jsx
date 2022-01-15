const ShowLoader = () => {
    return(
        <div>
        <a className={`show-p-b`} href={process.env.URL_STATE+"/"}>
          <div className="show-p-b-p">
            <img className="show-p-b-i" src={`${process.env.URL_STATE}/images/left.svg`} alt="left" />
          </div>
        </a>
        <div className="show-product">
          <div className="show-product-2">
            <div className="show-p-p">
              <img src={process.env.URL_STATE+"/images/first-aid-alt.svg"} alt="" loading="lazy" className="skeleton show-p-i" />
            </div>
          </div>
          <div className="show-product-3">
            <div className="show-p-i-b">
              <div className="skeleton show-p-i-b-h-loader">
                
              </div>
              <div className="skeleton show-p-i-b-p-loader-1">
                
              </div>
              <div className="skeleton show-p-i-b-p-loader-2">
                
              </div>
              <div className="skeleton show-p-i-b-p-loader-3">
                
              </div>
              <div className="show-p-i-b-f">
                <a href="/s" className="show-button">
                  <img src={process.env.URL_STATE+"/images/loader.svg"} alt="" loading="lazy" className="show-button-loader" />
                </a>
                <button type="button" className="show-favourite">
                  <div className="show-f-p">
                    <img className="show-f-i" src={`${process.env.URL_STATE}/images/heart-red.svg`} alt="" />
                  </div> Загрузка
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowLoader;