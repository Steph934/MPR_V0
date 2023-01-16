// component
// 
// 
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';

// ----------------------------------------------------------------------


const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <DashboardIcon />,
  },
  {
    title: 'ma liste',
    path: '/dashboard/list',
    icon: <ListAltIcon />,
  },
  {
    title: 'mon calendrier',
    path: '/dashboard/calendar',
    icon: <CalendarMonthIcon />,
  },
  {
    title: 'Profil',
    path: '/dashboard/user',
    icon: <PermIdentityIcon />,
  },
  {
    title: 'deconnexion',
    path: '/login',
    icon: <LogoutIcon />,
  },
];

// ! https://mui.com/material-ui/material-icons/
// TODO - HTTP Request error code préparé les pages en fonction des erreur de requêtes (403 ... 404)
export default navConfig;
