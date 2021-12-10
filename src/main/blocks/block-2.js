import ItemList2 from "./item-list2";

const Block2 = () => {
    return(
        <div className="maybe-panel">
        <div className="maybe-panel-block">
          <h1 className="m-p">Может понадобиться</h1>
          <h1 className="m-p-content">Вас могут заинтересовать</h1>
          {/*  */}
          <div className="maybe-g-p">
            <ItemList2 />
          </div>
        </div>
      </div>
    );
};

export default Block2;