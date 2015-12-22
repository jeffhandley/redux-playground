import Fluxible from 'fluxible';
import provideContext from 'fluxible-addons-react/provideContext';
import Page from './components/Page';

export default function createPage(req, context) {
    const component = provideContext(Page, {
        layout: context.layoutActionPropTypes
    });

    const page = new Fluxible({ component });

    page.plug({
        name: 'createPage',

        plugContext() {
            return {
                plugComponentContext(componentContext) {
                    componentContext.layout = context.layout;
                }
            }
        }
    });

    return page;
}
