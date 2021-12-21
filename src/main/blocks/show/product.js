import ProductInfo from "./product-info";
import { useState,useEffect } from "react";
import GetHistoryLocation from "../../../locate";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import  '../../../data';
import ProductInfoLoader from "./product-info-loader";

const Product = () => {
    const [lazyblock,setLazyBlock] = useState(false);
    const [ProductItem,setProductItem] = useState([
        {id:1,images:GetHistoryLocation+'/images/factory.svg',title:'Производитель',content:"Загружаем данные. Пожалуйста подождите."},
        {id:2,images:GetHistoryLocation+'/images/security.svg',title:'Фармакотерапевтическая группа',content:"Загружаем данные. Пожалуйста подождите."},
        {id:3,images:GetHistoryLocation+'/images/forads.svg',title:'Действующее вещество:',content:"Загружаем данные. Пожалуйста подождите."},
        {id:4,images:GetHistoryLocation+'/images/lekform.svg',title:'Лекарственная форма:',content:"Загружаем данные. Пожалуйста подождите."}
    ]);
    useEffect(()=>{
        let check = true;
        const db = getFirestore();
        getDoc(doc(db,'list','1fXhVDolCicMKjr2TFh7')).then((docSnap)=>{
          if(docSnap.exists()) {
            const s = docSnap.data();
            if(check) { 
                setProductItem([
                    {id:1,images:GetHistoryLocation+'/images/factory.svg',title:'Производитель',content:s.production},
                    {id:2,images:GetHistoryLocation+'/images/security.svg',title:'Фармакотерапевтическая группа',content:s.pharm_group},
                    {id:3,images:GetHistoryLocation+'/images/forads.svg',title:'Действующее вещество:',content:s.active},
                    {id:4,images:GetHistoryLocation+'/images/lekform.svg',title:'Лекарственная форма:',content:s.form}
                ]);
                setLazyBlock(true);
            }
          }
          else console.log("error. Don't exist!");
        });
        return () => {
          check=false;
        };
      },[]);
    return(
        <div>
        
        {lazyblock ? ProductItem.map(product=>{
            return(<ProductInfo item={product} key={product.id} />);
        }):<ProductInfoLoader/>}
        </div>
    );
};

export default Product;