import Menu from './menu';
import GetHistoryLocation from '../../locate'
import { useSelector } from 'react-redux';

const MenuList = () => {
    const cash = useSelector(state=>state.cash);
    return(
        <div className="menu-select">
            <Menu item={{id:1,images:GetHistoryLocation+'/images/pills',title:'Каталог',active:GetHistoryLocation+'/'}}/>
            <Menu item={{id:2,images:GetHistoryLocation+'/images/shopping-sale',title:'Для вас',active:GetHistoryLocation+'/foryou'}}/>
            <Menu item={{id:3,images:GetHistoryLocation+'/images/shopping-basket',title:'Корзина',active:GetHistoryLocation+'/basket',accept:cash,send:''}}/>
            <Menu item={{id:4,images:GetHistoryLocation+'/images/heart-alt',title:'Избранное',active:GetHistoryLocation+'/favourite'}}/>
            <Menu item={{id:5,images:GetHistoryLocation+'/images/person',title:'Войти',active:GetHistoryLocation+'/user'}}/>
        </div>
    );
}

export default MenuList;