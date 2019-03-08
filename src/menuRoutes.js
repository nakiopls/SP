import ParkingState from './ParkingState/ParkingState'
import GeneralInfo from './General/GeneralInfo'
import LogoffIcon from '@material-ui/icons/ExitToApp';
import CarIcon from '@material-ui/icons/DirectionsCar'
import DashboardIcon from '@material-ui/icons/Dashboard';

const Routes = {
    main: [
        {
            label: 'Info. General',
            route: '/',
            component: GeneralInfo,
            icon: DashboardIcon
        },
        {
            label: 'Estacionamientos',
            route: '/parks',
            component: ParkingState,
            icon: CarIcon
        }
    ],
    login: [{
        label: 'Logoff',
        route: '/logoff',
        component: null,
        icon: LogoffIcon
    }]
}

export default Routes;