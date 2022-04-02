import { Fragment } from 'react';
import { PropertyTypeButtom } from './components/PropertyTypeButtom';
import { PropertyTypesContainer } from './styles';

const PropertiesTypes = [

    {icon: 'icono-apartamento', label: 'Apartamentos' },
    {icon: 'icono-casa', label: 'Casas' },
    {icon: 'icono-lote', label: 'Lotes' },
    {icon: 'icono-local', label: 'Locales' },
    {icon: 'icono-finca', label: 'Fincas' },
];
export const Home = () => (
    <Fragment> 
        <h1> home-morada </h1>  
        <PropertyTypesContainer> 
        {
            PropertiesTypes.map(item => 
                <PropertyTypeButtom icon={item.icon} label={item.label} />)
        }   
        </PropertyTypesContainer> 
    </Fragment>
    
)