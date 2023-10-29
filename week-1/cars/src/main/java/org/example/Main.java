package org.example;

import org.example.business.ProductManager;
import org.example.dataAccess.HibernateProductDao;
import org.example.entities.Product;

public class Main {
    public static void main(String[] args) throws Exception {
        Product product1 = new Product("car", "Lightning (Şimşek) McQueen","Pixar",1);
        Product product2 = new Product("car","Sally Carrera","Pixar",2);
        Product product3 = new Product("truck","Mater","Pixar",3);
        Product product4 = new Product("car","Doc Hudson","Pixar",4);
        Product product5 = new Product("car","Jackson Storm","Pixar",5);
        Product product6 = new Product("car","Cruz Ramirez","Pixar",6);
        Product product7 = new Product("car","Junior Moon","Pixar",7);
        Product product8 = new Product("electricBike","Level.2 Commuter","Aventon",8);
        Product product9 = new Product("truck","F-15","Ford",9);

        ProductManager productManager = new ProductManager(new HibernateProductDao());
        productManager.add(product1);
        productManager.delete(product8);
        productManager.alter(product9);







    }
}