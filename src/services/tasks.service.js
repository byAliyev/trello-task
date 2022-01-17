import AppService from '../services/_app.service';

export default {
    list: () => {
        return AppService.get('/tasks');
    },

    create: (params) => {
        if(params.id){
            return AppService.patch(`/tasks/${params.id}`, params);
        }

        return AppService.post('/tasks', params);
    },

}