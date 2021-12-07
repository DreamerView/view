import Menu from './menu';
import GetHistoryLocation from '../../locate'

const MenuList = () => {
    return(
        <div className="menu-select">
            <Menu item={{images:GetHistoryLocation+'/images/pills',title:'Каталог',active:GetHistoryLocation+'/'}}/>
            <Menu item={{images:GetHistoryLocation+'/images/shopping-sale',title:'Для вас',active:GetHistoryLocation+'/foryou'}}/>
            <Menu item={{images:GetHistoryLocation+'/images/shopping-basket',title:'Корзина',active:GetHistoryLocation+'/basket'}}/>
            <Menu item={{images:GetHistoryLocation+'/images/heart-alt',title:'Избранное',active:GetHistoryLocation+'/favourite'}}/>
            <Menu item={{images:GetHistoryLocation+'/images/person',title:'Войти',active:GetHistoryLocation+'/user'}}/>
        </div>
    );
}

export default MenuList;