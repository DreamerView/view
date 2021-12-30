import Menu from './menu';
import GetHistoryLocation from '../../locate'
import {useState} from 'react';

const MenuList = () => {
    let [menu] = useState([
        {id:1,images:GetHistoryLocation+'/images/pills',title:'Каталог',active:GetHistoryLocation+'/'},
        {id:2,images:GetHistoryLocation+'/images/shopping-sale',title:'Для вас',active:GetHistoryLocation+'/foryou'},
        {id:3,images:GetHistoryLocation+'/images/shopping-basket',title:'Корзина',active:GetHistoryLocation+'/basket',accept:'',send:''},
        {id:4,images:GetHistoryLocation+'/images/heart-alt',title:'Избранное',active:GetHistoryLocation+'/favourite'},
        {id:5,images:GetHistoryLocation+'/images/person',title:'Войти',active:GetHistoryLocation+'/user'}
    ]);
    // let t;
    // if(localStorage.getItem("basket-info")) {
    //     setNotification(JSON.parse(localStorage.getItem("basket-info")).length);
    //     t="yes";
    // }
    return(
        <div className="menu-select">
            {menu.map(m=><Menu item={m} key={m.id}/>)}
        </div>
    );
}

export default MenuList;