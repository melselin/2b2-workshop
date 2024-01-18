import React, { useState, useEffect } from "react";
import CarService from "../services/carService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Table } from "semantic-ui-react";
import Menu from "semantic-ui-react";
import Icon from "semantic-ui-react";
import Button from "semantic-ui-react";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify/dist/components";

export default function CarList() {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    let carService = new CarService()
    carService.getCars().then(result=>setCars(result.data.data))
  },[])

    const handleAddToCart=(car)=>{
      dispatch(addToCart(car));
      toast.success(`${car.modelName} sepete eklendi!`)
    }


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cars.map((car) => (
            <Table.Row key={car.id}>
              <Table.Cell>
                <Link to={`/products/${car.modelName}`}>
                  {car.modelName}
                </Link>
              </Table.Cell>
              <Table.Cell>{car.dailyPrice}</Table.Cell>
              <Table.Cell>{car.colorName}</Table.Cell>
              <Table.Cell>{car.plate}</Table.Cell>
              <Table.Cell>{car.category.kilometer}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(car)}>
                  Add to your cart
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
