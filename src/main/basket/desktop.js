import GetHistoryLocation from "../../locate";
import {useState,useEffect} from 'react';
import { getFirestore,doc, onSnapshot } from "firebase/firestore";


const DesktopBasket = (info)=> {
  const [status,setStatus] = useState('');
  const [pr,setPr] = useState("");
  const [sum,setSum] = useState(info.item.item);
  const id = info.item.key;
  useEffect(()=>{
    // setLazyBlock(true);
    let check = true;
    const db = getFirestore();
    onSnapshot(doc(db,'list',id),(docSnap)=>{
      if(docSnap.exists()) {
        const s = docSnap.data();
        if(check) { 
          setStatus({title:s.title,content:s.content,price:s.price,image:s.image,id:s.id});
          setPr((s.price*1).toFixed(2));
          // setLazyBlock(false);
        }
      }
      else {
        if(check) { 
          setStatus({title:"404",content:"Ничего не найдено",price:"0",image:"/images/first-aid-alt.svg"});
          setPr("NaN");
          // setLazyBlock(false);
        }
      };
    });
    return () => {
      check=false;
    };
  },[id]);
  const PlusSum = async() => {
    setSum(sum+1);
    setPr(((sum+1)*status.price).toFixed(2));
  };
  const MinusSum = () => {
    if(sum <= 1) return 0;
    else {
      setSum(sum-1);
      setPr((pr-status.price).toFixed(2));
    }
  };
    return(
        <div className="backet-p">
        <div className="img-basket-picture">
            <img className="img-backet" src={GetHistoryLocation+status.image} alt="Panakea 2" />
        </div>
        <div className="id-b">
          <h1 className="id-b-t1">{info.item.from}</h1>
          <h1 className="id-b-t2">{status.title}</h1>
          <h1 className="id-b-t3">ID: {status.id}</h1>
        </div>
        <div className="quantity-block">
            <div className="quantity">
                <button onClick={MinusSum} className="but">-</button>
                <div className="but-quantity-block">
                    <h1 className="but-quantity">{sum}</h1>
                </div>
                <button onClick={PlusSum} className="but-p">+</button>
            </div>
        </div>
        <div className="priceb">
          <h1 className="price-backet">{pr} ₸</h1>
          <button className="add">Добавить в избранное</button>
          <button className="delete">Удалить из корзины</button>
        </div>
      </div>
    );
};

export default DesktopBasket;