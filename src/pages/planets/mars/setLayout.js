export const leftMenu = [
    { href: './mars', title: 'Mars Home', text: 'Mars Home' },
    { href: '#', title: 'Mars Admin', text: 'Mars Admin' }
];

export default (layout) => {
    // layout.requireJs('/static/pages/planets/mars/client.js');
    layout.setPageTitle('Mars');
    layout.selectTopMenu('Mars');
    layout.setLeftMenu(leftMenu);
}
