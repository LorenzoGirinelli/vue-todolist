Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
                'Fare la colazione',
                'Portare fuori il cane',
                'Preparare il pranzo',
                'Fare l\'allenamento',
            ]
        }
    }
);