import Api from '@/services/Api'

export default {
    fetchPosts () {
        console.log('start fetch posts')
      return Api().get('posts')
    },

    addPost (params) {
      return Api().post('posts', params)
    },

    updatePost (params) {
      return Api().put('posts', params)
    },
    
  }