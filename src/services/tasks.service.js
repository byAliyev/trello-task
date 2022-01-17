import AppService from '../services/_app.service';

export default {
    list: () => {
        return AppService.get('/tasks');
    },

    create: (params) => {
        return AppService.post('/tasks', params);
    }
}