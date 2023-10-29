package org.example.dataAccess;

import org.example.entities.Product;

public class JdbcProductDao implements ProductDao{
    @Override
    public void add(Product product) {
        System.out.println("Jdbc ile veritabanına eklendi.");
    }

    @Override
    public void delete(Product product) {
        System.out.println("Jdbc ile veritabanından silindi.");

    }

    @Override
    public void alter(Product product) {
        System.out.println("Jdbc ile veritabanında değişiklik yapıldı.");

    }
}
