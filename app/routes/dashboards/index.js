import { HtmlElement, Route } from 'cx/widgets';


import Sales from './sales';
import WebAnalytics from './web-analytics';
import CountryInformations from './country-informations';

export default <cx>
    <Route route="~/dashboards/sales" url:bind="url">
        <Sales />
    </Route>
    <Route route="~/dashboards/web-analytics" url:bind="url">
        <WebAnalytics />
    </Route>
    <Route route="~/dashboards/country-informations" url:bind="url">
        <CountryInformations />
    </Route>
</cx>;
