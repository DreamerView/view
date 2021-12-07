import ProductInfo from "./product-info";
import { useState } from "react";

const Product = () => {
    const [ProductItem] = useState([
        {id:1,images:'/images/factory.svg',title:'Производитель',content:'ГлаксоСмитКляйн'},
        {id:2,images:'/images/security.svg',title:'Фармакотерапевтическая группа',content:'Противоконгестивное средство - альфа-адреномиметик'},
        {id:3,images:'/images/forads.svg',title:'Действующее вещество:',content:'Ксилометазолин'},
        {id:4,images:'/images/lekform.svg',title:'Лекарственная форма:',content:'Спрей назальный дозированный'}
    ])
    return(
        ProductItem.map(product=>{
            return(<ProductInfo item={product} key={product.id} />);
        })
    );
};

export default Product;