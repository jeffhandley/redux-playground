export const leftMenu = [
    { href: './earth', title: 'Earth Home', text: 'Earth Home' },
    { href: '#', title: 'Earth Admin', text: 'Earth Admin' }
];

export default (layout) => {
    // layout.requireJs('/static/pages/planets/earth/client.js');
    layout.setPageTitle('Earth');
    layout.selectTopMenu('Earth');
    layout.setLeftMenu(leftMenu);
}
