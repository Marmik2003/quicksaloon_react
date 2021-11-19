import { Icon } from '@iconify/react';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Business } from '@material-ui/icons';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'services',
    path: '/admin/services',
    icon: getIcon('vaadin:cogs')
  },
  {
    title: 'create shop',
    path: '/admin/create-shop',
    icon: <AddBusinessIcon />
  },
  {
    title: 'all shops',
    path: '/admin/shops',
    icon: <Business />
  },
];

export default sidebarConfig;
