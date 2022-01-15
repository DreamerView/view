import Menu from './menu';
import { useSelector } from 'react-redux';

const MenuList = () => {
    const cash = useSelector(state=>state.cash);
    return(
        <div className="menu-select">
            <Menu item={{id:1,images:process.env.PUBLIC_URL+'/images/pills',title:'Каталог',active:process.env.PUBLIC_URL+'/'}}/>
            <Menu item={{id:2,images:process.env.PUBLIC_URL+'/images/shopping-sale',title:'Для вас',active:process.env.PUBLIC_URL+'/foryou'}}/>
            <Menu item={{id:3,images:process.env.PUBLIC_URL+'/images/shopping-basket',title:'Корзина',active:process.env.PUBLIC_URL+'/basket',accept:cash,send:''}}/>
            <Menu item={{id:4,images:process.env.PUBLIC_URL+'/images/heart-alt',title:'Избранное',active:process.env.PUBLIC_URL+'/favourite'}}/>
            <Menu item={{id:5,images:process.env.PUBLIC_URL+'/images/person',title:'Войти',active:process.env.PUBLIC_URL+'/user'}}/>
        </div>
    );
}

export default MenuList;