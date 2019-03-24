import {routesNames as list} from './pages/list/list.routes';

const adminRoutenames = {
    list
};

Object.defineProperty(adminRoutenames, 'toString', {
    value: () => 'admin'
});

export {
    adminRoutenames
};
