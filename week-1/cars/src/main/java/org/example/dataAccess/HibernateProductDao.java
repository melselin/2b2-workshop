package org.example.dataAccess;

import org.example.entities.Product;

public class HibernateProductDao implements ProductDao {
    @Override
    public void add(Product product) {
        System.out.println("Hibernate ile veritabanına eklendi.");

    }

    @Override
    public void delete(Product product) {
        System.out.println("Hibernate ile veritabanından silindi.");
    }

    @Override
    public void alter(Product product) {
        System.out.println("Hibernate ile veritabanında değişiklik yapıldı.");

    }
}
