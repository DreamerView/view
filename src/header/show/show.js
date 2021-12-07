import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DataBase from '../../database/database.json';
import GetHistoryLocation from '../../locate'

const Show = (props) => {

    const {id} = useParams();
    const Maybe = () =>{
      window.scroll({top:400,behavior:"smooth"});
    };
    return(
        <div>
        <Link className="show-p-b" to={GetHistoryLocation+"/"}>
          <div className="show-p-b-p">
            <img className="show-p-b-i" src={`${GetHistoryLocation}/images/left.svg`} alt="left" />
          </div>
        </Link>
        <div className="show-product">
          <div className="show-product-2">
            <div className="show-p-p">
              <img src={`${GetHistoryLocation}/images/fur.jpg`} alt="" loading="lazy" className="show-p-i" />
            </div>
          </div>
          <div className="show-product-3">
            <div className="show-p-i-b">
              <h1 className="show-p-i-b-h">
                {DataBase.map((data)=>{
                  return <span key={data.fum}>{data.fum.title}</span>
                })}{id}
              </h1>
              <p className="show-p-i-b-p">
              {DataBase.map((data)=>{return <span key={data.fum}>{data.fum.content}</span>})}
              </p>
              <p className="show-p-i-b-p">
                Средняя цена в аптеках города <b>{DataBase.map((data)=>{return <span key={data.fum}>{data.fum.price}</span>})} ₸</b>
              </p>
              <div className="show-p-i-b-f">
                <button onClick={Maybe} className="show-button">
                  Купить
                </button>
                <button type="button" className="show-favourite">
                  <div className="show-f-p">
                    <img className="show-f-i" src={`${GetHistoryLocation}/images/heart-red.svg`} alt="" />
                  </div> Добавить избранное
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Show;