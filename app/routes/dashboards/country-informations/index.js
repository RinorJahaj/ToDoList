import { HtmlElement, Text, Link } from 'cx/widgets';
import { LookupField } from 'cx/widgets';
import { LabelsLeftLayout, KeySelection } from 'cx/ui';
import { Grid } from 'cx/widgets';
import { Window } from 'cx/widgets';
 
import Controller from './Controller';
 
export default <cx>
    <main controller={Controller}>
        <div putInto="header">
            <ul class="csb-breadcrumb">
                <li class="cse-breadcrumb-item"><Link href="~/">Home</Link></li>
                <li class="cse-breadcrumb-item">Dashboard</li>
                <li class="cse-breadcrumb-item">Country Informations</li>
            </ul>
        </div>
        <header class="cse-applayout-contentheader">
            <h4>Informations about specific countries. </h4>
        </header>
        <div class="widgets">
            <div layout={LabelsLeftLayout}>
                <LookupField
                    label="Continent:"
                    text-bind="$page.text"
                    options-bind="$page.options"
                    value-bind="$page.value"
                    autoFocus
                />
            </div>
 
            <Window
                title={{ bind: "$page.windowTitle" }}
                visible={{ bind: "$page.visible", defaultValue: false }}
                center
                style={{ width: "500px" }}
                modal
            >
                <div style={{
                    backgroundColor: "darkseagreen",
                    color: "white",
                    minHeight: 24,
                    padding: 5,
                    textAlign: "center"
                }}><Text value={{ bind: '$page.textValue' }} />
                </div>
            </Window>
 
        </div>
 
        <Grid records-bind="$page.records" style={{ width: "100%" }} columns={[
            { header: 'Country Name', field: 'countryName',align:"center", sortable: true },
            { header: 'Capital', field: 'capital',align:"center", sortable: true },
            { header: 'Continent', field: 'continent',align:"center", sortable: true },
            { header: 'Population', field: 'population',align:"center", sortable: true },
            { header: 'Languages', field: 'languages',align:"center", sortable: true }
        ]}
            selection={{ type: KeySelection, keyField: 'countryName', bind: "$page.selection" }}
        />
    </main>
</cx >