import {routesNames as list} from './pages/list/list.routes';

const routesNames = {
    admin: {
        list
    }
};

Object.defineProperty(routesNames.admin, 'toString', {
    value: () => 'admin'
});

export {
    routesNames
};
