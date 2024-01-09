import React from "react";
import { useParams } from "react-router-dom";
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import CarService from "../services/carService";

export default function CarDetail() {
  let { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    let carService = new CarService();

    // Veri çekme işlemi
    carService
      .getCarById(id)
      .then((result) => setCar(result.data.data))
      .catch((error) =>
        console.error("Arabaları getirirken hata oluştu:", error)
      );
  }, [id]);

  return (
    <CardGroup>
      <Card fluid>
        <CardContent>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <CardHeader>{car.name}</CardHeader>
          <CardMeta>{car.model}</CardMeta>
          <CardDescription>
            Kilometre: {car.kilometer} Yıl: {car.year} Plaka: {car.plate}
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </CardGroup>
  );
}
