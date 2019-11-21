import { Controller, History, Url } from 'cx/ui';
var Geonames = require("geonames.js");

const geonames = new Geonames({
    username: 'Arlind',
    lan: 'en',
    encoding: 'JSON'
});

export default class extends Controller {
    init() {
        super.init();

        geonames.search({ q: 'CONT' }) //get continents
            .then(resp => {
                let continents = resp.geonames;
                this.store.set("$page.options", continents.map((item, i) => ({ text: item.name, id: i + 1 })));
            })
            .catch(err => console.error(err));

        let countryNum;
        this.addTrigger('t1', ["$page.text"], cont => {
            geonames.countryInfo() //get countries of a given continent
                .then(resp => {
                    let countries = resp.geonames;
                    this.store.set("$page.records", countries.map((item, i) => ({
                        id: i + 1,
                        countryName: item.countryName,
                        capital: item.capital,
                        continent: item.continentName,
                        population: item.population,
                        languages: item.languages
                    })).filter(item => item.continent === cont));

                    countryNum = this.store.get("$page.records").length;

                })
                .catch(err => console.error(err));
        });

        this.addTrigger('t2', ["$page.selection"], selected => {

            this.store.set("$page.windowTitle", selected);

            for (let i = 0; i < countryNum; i++) {
                if (Object.values(this.store.get("$page.records")[i]).indexOf(this.store.get("$page.selection")) > -1) {
                    let info = [
                        "Capital: " + this.store.get("$page.records")[i]["capital"],
                        ", Population: " + this.store.get("$page.records")[i]["population"],
                        ", Language: " + this.store.get("$page.records")[i]["languages"]
                    ];
                    this.store.set("$page.textValue", info);
                    break;
                }
            }

            this.store.set("$page.visible", true);
        });
    }
}
        //Shfaqja e kontinenteve default(pa trigger)
        // geonames.countryInfo() //get countries of a given continent
        //     .then(resp => {
        //         let countries = resp.geonames;
        //         this.store.set('$page.records', countries.map(item => ({
        //             countryName: item.countryName,
        //             capital: item.capital,
        //             continent: item.continentName,
        //             population: item.population,
        //             languages: item.languages
        //         })));
        //     })
        //     .catch(err => console.error(err));



