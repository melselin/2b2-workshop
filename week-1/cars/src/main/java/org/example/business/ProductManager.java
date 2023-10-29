package org.example.business;

import org.example.dataAccess.HibernateProductDao;
import org.example.dataAccess.JdbcProductDao;
import org.example.dataAccess.ProductDao;
import org.example.entities.Product;

public class ProductManager {
    private ProductDao productDao;

    public ProductManager(ProductDao productDao) {

        this.productDao = productDao;
    }

    public void add(Product product) throws Exception {
        if(product.getName().length()<3){
            throw  new Exception("Ürün ismi 3 karakterden kısa olamaz.");
        }
        if(product.getId()<1){
            throw  new Exception("Lütfen ürün için geçerli bir Id giriniz.");
        }
        if(product.getType().length()<1){
            throw  new Exception("Lütfen geçerli bir ürün kategorisi giriniz.");
        }
        if(product.getBrandModel().length()<1){
            throw  new Exception("Lütfen geçerli bir ürün markası giriniz.");
        }

        productDao.add(product);

    }

    public void delete(Product product) {
        productDao.delete(product);
    }

    public void alter(Product product) throws Exception {
        if(product.getName().length()<3){
            throw  new Exception("Ürün ismi 3 karakterden kısa olamaz.");
        }
        if(product.getId()<1){
            throw  new Exception("Lütfen ürün için geçerli bir Id giriniz.");
        }
        if(product.getType().length()<1){
            throw  new Exception("Lütfen geçerli bir ürün kategorisi giriniz.");
        }
        if(product.getBrandModel().length()<1){
            throw  new Exception("Lütfen geçerli bir ürün markası giriniz.");
        }
        productDao.alter(product);
    }
}
