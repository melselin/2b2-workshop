package oopWithNLayeredApp.dataAccess;

import oopWithNLayeredApp.entities.Product;

//Dao stands for = data access object
public class JdbcProductDao implements ProductDao {
    public void add(Product product){
        //sadece ve sadece db erişim kodları buraya yazılır... SQL
        System.out.println("Jdbc ile veritabanına eklendi.");
    }
}

//what would we do in a Hibernate transition case?
