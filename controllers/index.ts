// import axios from 'axios'
import store from './store'

class Controller {
  store = store;

  checkLogin() {
    try {
      // Call API here
    } catch (error) {
      return error
    }
  }

  Login() {
    try {
      // Call API here
      // await axios.post('abc.xyz', {
      //   email, password
      // })
      console.log('ahoho')
    } catch (error) {
      return error
    }
  }
}

export default new Controller();
