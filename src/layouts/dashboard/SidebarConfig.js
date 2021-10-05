import { Icon } from '@iconify/react';
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
  }
];

export default sidebarConfig;
