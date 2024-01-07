import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableBody, TableCell} from 'semantic-ui-react';
import CarService from '../services/carService';

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    let carService = new CarService();

    // Veri çekme işlemi
    carService.getCars()
      .then(result => setCars(result.data.data))
      .catch(error => console.error("Arabaları getirirken hata oluştu:", error));
  }, []); // Boş bağımlılık dizisi, yalnızca ilk render'dan sonra çalışmasını sağlar

  return (
    <div>
      <Table celled>
        {/* ... */}
        <TableBody>
          {Array.isArray(cars) && cars.length > 0 ? (
            cars.map(car => (
              <TableRow key={car.id}>
                <TableCell>{car.kilometer}</TableCell>
                <TableCell>{car.plate}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.dailyPrice}</TableCell>
                <TableCell>{car.modelName}</TableCell>
                <TableCell>{car.colorName}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6">No cars available</TableCell>
            </TableRow>
          )}
        </TableBody>
        {/* ... */}
      </Table>
    </div>
  );
}