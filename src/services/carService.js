import axios from "axios";

export default class CarService{
    getCars(){
        return axios.get("http://localhost:8081/api/cars/getAll")
    }
    getCarsById(carId){
        return axios.get("http://localhost:8081/api/cars/getById?carId=" + carId)
    }

}