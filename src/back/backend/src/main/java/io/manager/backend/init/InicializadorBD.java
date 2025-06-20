package io.manager.backend.init;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@Component
public class InicializadorBD {

    @PostConstruct
    public void createDatabaseIfNotExists() {
        String url = "jdbc:mysql://localhost:3306/?useSSL=false&serverTimezone=UTC";
        String user = "root";
        String password = "";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement()) {

            String sql = "CREATE DATABASE IF NOT EXISTS managerio CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci";
            stmt.executeUpdate(sql);
            System.out.println("Banco criado ou já existente.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
