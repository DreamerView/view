import Menu from './menu';
import GetHistoryLocation from '../../locate'
import { useSelector } from 'react-redux';

const MenuList = () => {
    const cash = useSelector(state=>state.cash);
    return(
        <div className="menu-select">
            <Menu item={{id:1,images:GetHistoryLocation+'/images/pills',title:'Каталог',active:'/'}}/>
            <Menu item={{id:2,images:GetHistoryLocation+'/images/shopping-sale',title:'Для вас',active:'/foryou'}}/>
            <Menu item={{id:3,images:GetHistoryLocation+'/images/shopping-basket',title:'Корзина',active:'/basket',accept:cash,send:''}}/>
            <Menu item={{id:4,images:GetHistoryLocation+'/images/heart-alt',title:'Избранное',active:'/favourite'}}/>
            <Menu item={{id:5,images:GetHistoryLocation+'/images/person',title:'Войти',active:'/user'}}/>
        </div>
    );
}

export default MenuList;