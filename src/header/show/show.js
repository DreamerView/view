import { Link,useParams } from 'react-router-dom';
import { getFirestore,collection, addDoc,doc, getDoc } from "firebase/firestore";
import  '../../data';
import { useEffect,useState } from 'react';
import ShowLoader from './show-loader';
import { Link as Link1} from 'react-scroll';


const Show = () => {
    let {id} = useParams();
    const [lazyblock,setLazyBlock] = useState('');
    const [look, setLook] = useState("");
    
    const [status,setStatus] =  useState({
      title:'Загрузка',
      content:'Пожалуйста подождите',
      price:'загружаем',
      image:'/images/first-aid-alt.svg'
    });
    useEffect(()=>{
      setLazyBlock(true);
      let check = true;
      const db = getFirestore();
      getDoc(doc(db,'list',id)).then((docSnap)=>{
        if(docSnap.exists()) {
          const s = docSnap.data();
          if(check) { 
            setStatus({title:s.title,content:s.content,price:s.price,image:s.image});
            setLazyBlock(false);
          }
        }
        else {
          if(check) { 
            setStatus({title:"404",content:"Ничего не найдено",price:"0",image:"/images/first-aid-alt.svg"});
            setLazyBlock(false);
          }
        };
      });
      return () => {
        check=false;
      };
    },[id]);
    useEffect(()=>{
      const Test = async()=> {
        let db = getFirestore();
        try {
          const docRef = await addDoc(collection(db, "list"), {
            title: "Panakea",
            content: "Panakea App"
  
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      console.log(Test);
    },[])
    useEffect(()=>{
      const toggleVisible = () => {
        const scrolled = window.pageYOffset;
        if (scrolled > 200){
          setLook("-fixed");
        } 
        else {
          setLook("");
        }
      };
      window.addEventListener('scroll', toggleVisible);
      return () => {
        window.removeEventListener('scroll', toggleVisible);
      };
    },[]);
    return(
        <>
        {lazyblock?<ShowLoader />:
        <div>
        <Link onClick={()=>{window.scrollTo({top: 0})}} className={`show-p-b${look}`} to={process.env.PUBLIC_URL+"/"}>
          <div className="show-p-b-p">
            <img className="show-p-b-i" src={`${process.env.PUBLIC_URL}/images/left.svg`} alt="left" />
          </div>
        </Link>
        <div className="show-product">
          <div className="show-product-2">
            <div className="show-p-p">
              <img src={process.env.PUBLIC_URL+status.image} alt="" loading="lazy" className="show-p-i" />
            </div>
          </div>
          <div className="show-product-3">
            <div className="show-p-i-b">
              <h1 className="show-p-i-b-h">
                {status.title}
              </h1>
              <p className="show-p-i-b-p">
                {status.content}
              </p>
              <p className="show-p-i-b-p">
                Средняя цена в аптеках города <b>{status.price} ₸</b>
              </p>
              <div className="show-p-i-b-f">
                <Link1 to="lets" smooth={true} duration={1000} offset={-75} className="show-button">
                  Купить
                </Link1>
                <button type="button" className="show-favourite">
                  <div className="show-f-p">
                    <img className="show-f-i" src={`${process.env.PUBLIC_URL}/images/heart-red.svg`} alt="" />
                  </div> Добавить избранное
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>}
      </>
    );
};

export default Show;