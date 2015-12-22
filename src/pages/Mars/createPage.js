import Fluxible from 'fluxible';
import provideContext from 'fluxible-addons-react/provideContext';
import Page from './components/Page';

export default function createPage(shell) {
    const component = provideContext(Page, {
        layout: shell.layoutActionPropTypes
    });

    const page = new Fluxible({ component });

    page.plug({
        name: 'createPage',

        plugContext() {
            return {
                plugComponentContext(componentContext) {
                    componentContext.layout = shell.layout;
                }
            }
        }
    });

    return page;
}
