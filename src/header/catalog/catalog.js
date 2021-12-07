import CatalogList from './catalog-list';
import GetHistoryLocation from '../../locate'

const Catalog = () => {
    return(
        <div className="panel-select">
              <CatalogList item={{images:GetHistoryLocation+'/images/pill.svg',title:'Лекарство'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/container.svg',title:'БАДы и Витамины'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/secure.svg',title:'Гигиенические средства'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/cosmetic.svg',title:'Косметика'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/book.svg',title:'Детские товары'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/healthcare.svg',title:'Медицинские приборы'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/favourite.svg',title:'Питание и спорт'}} />
              <CatalogList item={{images:GetHistoryLocation+'/images/zoo.svg',title:'Зоотовары'}} />
        </div>
    )
};

export default Catalog;
