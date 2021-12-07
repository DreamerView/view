import Item2 from "./item2";

const Block2 = () => {
    return(
        <div className="maybe-panel">
        <div className="maybe-panel-block">
          <h1 className="maybe">Может понадобиться</h1>
          {/*  */}
          <div className="maybe-g-p">
            <Item2 />
          </div>
        </div>
      </div>
    );
};

export default Block2;