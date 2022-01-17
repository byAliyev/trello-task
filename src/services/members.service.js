import AppService from '../services/_app.service';

export default {
    list: () => {
        return AppService.get('/members');
    },

    selectById: (id) => {
        return AppService.get(`/members/${id}`);
    },

    create: (params) => {
        return AppService.post('/members', params);
    }
}