import axios from "../plugins/axios"

export default class ManagerService{
  async get(body){
    return await axios.get(`managers?email=${body.email}&&password=${body.password}`)
  }
}
