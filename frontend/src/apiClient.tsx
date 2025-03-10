import axios, {AxiosInstance} from "axios";
import { BASEURL } from "./Configs/baseUrl";

export const APIClient = (customerHeader={}) :AxiosInstance =>{
  const headers = Object.keys(customerHeader).length >= 3 ? customerHeader : {"X-API-KEY":"", "content-type": "application/json", "accept": "application/json"}

  return axios.create({
    baseURL: BASEURL,
    timeout: 6000,
    headers: headers
  })
}