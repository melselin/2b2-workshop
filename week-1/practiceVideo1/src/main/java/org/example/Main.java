package org.example;

public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world!");

        String ortaMetin = "İlginizi çekebilir";   //camelCase rule
        String altMetin = "Vade süresi";

        System.out.println(ortaMetin);

        //integer
        int vade = 12;
        double dolarDun = 18.14;
        double dolarBugun = 18.10;

        boolean dolarDustuMu = false;

        String okYonu = "";

        if (dolarBugun < dolarDun) {
            okYonu = "down.svg";
            System.out.println(okYonu);

        } else if (dolarBugun == dolarDun) {
            okYonu = "equal.svg";
            System.out.println(okYonu);

        } else {
            okYonu = "up.svg";
            System.out.println(okYonu);

        }


        //array
        String[] krediler = {"Hızlı Kredi", "Maaşını halkbanktan alanlar", "Mutlu Emekli"};

        for (int i = 0; i < krediler.length; i++) {
            System.out.println(krediler[i]);
        }

    }
}