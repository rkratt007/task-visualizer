import Api from '@/services/Api'

export default {
    get_tasks () {
        return Api().get('tasks')
    }
}