import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableBody, TableCell} from 'semantic-ui-react';
import CarService from '../services/carService';
import { Link } from 'react-router-dom';

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    let carService = new CarService();

    // Veri çekme işlemi
    carService.getCars().then(result => setCars(result.data.data))
      .catch(error => console.error("Arabaları getirirken hata oluştu:", error));
  }, []); // Boş bağımlılık dizisi, yalnızca ilk render'dan sonra çalışmasını sağlar

  return (
    <div>
      <Table celled>
        {}
        <TableBody>
          {Array.isArray(cars) && cars.length > 0 ? (
            cars.map(car => (
              <TableRow key={car.id}>
                <TableCell><Link to={`/cars/${car.id}`}>{car.modelName}</Link></TableCell>
                <TableCell>{car.kilometer}</TableCell>
                <TableCell>{car.plate}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.dailyPrice}</TableCell>
                <TableCell>{car.colorName}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6">Araba Listesine Ulaşılamıyor.</TableCell>
            </TableRow>
          )}
        </TableBody>
        {/* ... */}
      </Table>
    </div>
  );
}