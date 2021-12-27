import { useState,useEffect } from "react";
import GetHistoryLocation from "../../locate";
import { getFirestore,doc, onSnapshot } from "firebase/firestore";

const BasketMobile = (info) => {
  const [status,setStatus] = useState('');
  const [sum,setSum] = useState(info.item.item);
  const [pr,setPr] = useState("");
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
          <div className="main-of-main">
            <div className="block-one-img-and-glakso">
              <div className="img-and-glakso">
                <div className="img-and-place">
                  <div className="relative-and-absolute">
                    <img className="img-size" src={GetHistoryLocation+status.image} alt="Panakea images" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="leader-text">
                <div className="place-glakso">
                  <h1 className="glakso-text-green">{info.item.from}</h1>
                </div>
                <div className="place-furak">
                  <h1 className="furak-text">{status.title}</h1>
                </div>
                <div className="place-furak">
                  <h1 className="id-text">ID: {status.id}</h1>
                </div>
              </div>
            </div>
            <div className="w">
              <div className="we">
                <div className="place-scary-turn-off">
                  <div className="scary-turn-off">
                    <button type="button" onClick={MinusSum} className="button-minus">-</button>
                    <div className="one-block">
                      <h1 className="one">{sum}</h1>
                    </div>
                    <button type="button" onClick={PlusSum} className="button-minus">+</button>
                  </div>
                </div>
                <div className="place-price">
                  <h1 className="price">{pr} ₸</h1>
                </div>
              </div>
              <div className="grid">
                <div className="place-favorite">
                  <button className="favorite">Добавить в избранное</button>
                </div>
                <div className="del-from-favorite">
                  <button className="unfavorite">Удалить из корзины</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default BasketMobile;