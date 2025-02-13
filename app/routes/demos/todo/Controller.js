import { Controller, History, Url } from 'cx/ui';
import { Toast } from "cx/widgets"
import toastconfig from "./toastconfig"
// function createToast(e, { store }, { placement, mod }) {
//     let toast = Toast.create({
//         message: 'ToDo Added!',
//         placement: placement,
//         mod: mod,
//         timeout: 2000
//     });
//     toast.open(store);
// }



export default class extends Controller {
    init() {
        super.init();
        var items = this.store.get('$page.todos');
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
            items = [{
                id: 1,
                text: 'Get Cx boilerplate app',
                done: true
            }, {
                id: 2,
                text: 'Learn Cx'
            }, {
                id: 3,
                text: 'Chose a CSS class prefix'
            }, {
                id: 4,
                text: 'Tweak the layout if needed'
            }, {
                id: 5,
                text: 'Create an application'
            }];
            this.store.set('$page.todos', items);
        }
    }

    onAdd() {
        var items = this.store.get('$page.todos');
        for (var i in items) {
            if (this.store.get('$page.text').trim().toLowerCase() === items[i].text.trim().toLowerCase()) {
                Toast.create(toastconfig.warningToast("ToDo Exists")).open();
                return;
            }
        }
        var id = items.reduce((acc, item) => Math.max(acc, item.id), 0) + 1;
        items = items.concat({
            id: id,
            text: this.store.get('$page.text') || `Untitled (${id})`,
            done: false
        });
        this.store.set('$page.todos', items);
        this.store.set('$page.text', null);
        Toast.create(toastconfig.successToast("ToDo Aded")).open();

    }

    onRemove(e, { store }) {
        e.preventDefault();
        Toast.create(toastconfig.warningToast("ToDo Deleted!")).open();
        var id = store.get('$record.id');
        var items = this.store.get('$page.todos');
        this.store.set('$page.todos', items.filter(item => item.id !== id));
    }


}

