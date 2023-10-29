package org.example.entities;

public class Product {
    private String type;

    private String name;
    private String brandModel;
    private int id;


    public Product(String type, String name, String brandModel, int id) {
        super();
        this.type = type;
        this.name = name;
        this.brandModel = brandModel;
        this.id = id;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBrandModel() {
        return brandModel;
    }

    public void setBrandModel(String brandModel) {
        this.brandModel = brandModel;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
