package org.example;

public class Main {
    public static void main(String[] args) {
        Product product1 = new Product();
        product1.setName("Delonghi Kahve Makinesi");
        product1.setDiscount(7);
        product1.setUnitPrice(7500);
        product1.setUnitsInStock(3);
        product1.setImageUrl("product1.jpg");
                    //set value
       /* product1.name = "Delonghi Kahve Makinesi";
        product1.unitPrice = 7500;
        product1.discount = 7;
        product1.unitsInStock = 3;
        product1.imageUrl = "product1.jpg"; */
                    //get
        //System.out.println(product1.name);
        Product product2 = new Product();
        product2.setName("Smeg Kahve Makinesi");
        product2.setDiscount(7);
        product2.setUnitPrice(7500);
        product2.setUnitsInStock(3);
        product2.setImageUrl("product2.jpg");
        /*
        product2.name = "Smeg Kahve Makinesi";
        product2.unitPrice = 9500;
        product2.discount = 21;
        product2.unitsInStock = 13;
        product2.imageUrl = "product2.jpg";

         */

        Product product3 = new Product();
        product3.setName("Kitchen Aid Kahve Makinesi");
        product3.setDiscount(7);
        product3.setUnitPrice(7500);
        product3.setUnitsInStock(3);
        product3.setImageUrl("product3.jpg");

        /*
        product3.name = "Kitchen Aid Kahve Makinesi";
        product3.unitPrice = 5500;
        product3.discount = 5;
        product3.unitsInStock = 5;
        product3.imageUrl = "product3.jpg";

         */

        System.out.println("<ul>");
        Product[] products = {product1,product2,product3};
        for (Product product : products){
            System.out.println("<li>" + product.getName() + "</li>");
        }
        System.out.println("</ul>");

        IndividualCustomer individualCustomer = new IndividualCustomer();
        individualCustomer.setId(1);
        individualCustomer.setCustomerNumber("3");
        individualCustomer.setPhone("05443453344");
        individualCustomer.setFirstName("Melisa");
        individualCustomer.setLastName("Welfringer");

        CorporateCustomer corporateCustomer = new CorporateCustomer();
        corporateCustomer.setId(2);
        corporateCustomer.setCompanyName("2b2");
        corporateCustomer.setPhone("05342252351");
        corporateCustomer.setTaxNumber("34342");

        Customer[] customers = {individualCustomer,corporateCustomer};
    }
}