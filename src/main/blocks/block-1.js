import ItemList1 from './item-list1';

const Block1 = () => {
  
    return(
        <div className="m">
        <div className="m-block">
          <h1 className="m-p">Популярные товары</h1>
          <h1 className="m-p-content">Вас могут заинтересовать</h1>
          <ItemList1 />
        </div>
      </div>
      // 
    );
};

export default Block1;