import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider } from "semantic-ui-react";
import { cartItems } from "../store/initialValues/cartItems";
import Label from "semantic-ui-react";

export default function CartSummary() {

  const {carItems} = useSelector(state=> state.cart)

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem)=>(
            <Dropdown.Item>{cartItem.product.productName}
            <Label>
              {cartItem.quantity}
              </Label></Dropdown.Item>
            ))
          }
          
          <DropdownDivider></DropdownDivider>
          <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
