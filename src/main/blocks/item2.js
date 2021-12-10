import GetHistoryLocation from "../../locate";

const Item2 = (info) => {
    return(
        <div className="maybe-g-p-b">
              <div className="maybe-g-p-b1">
                <div className="maybe-flex">
                  <div className="maybe-flex-picture">
                    <img loading="lazy" className="maybe-flex-image" src={info.item.image} alt="Panakea 2" />
                  </div>
                  <div className="maybe-flex-container">
                    <h1 className="b-t1">{info.item.title}</h1>
                    <h1 className="b-t2">{info.item.content}</h1>
                    <h1 className="b-t3">{info.item.price}</h1>
                    <div className="b-i-p">
                      <div className="b-p-p">
                        <div className="i-p-1">
                          <img loading="lazy" src={GetHistoryLocation+"/images/shopping-basket-add.svg"} alt="Panakea 2" className="p" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Item2;