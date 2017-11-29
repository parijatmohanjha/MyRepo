package hl.ws.rest.util;

import java.io.IOException;
import java.io.InputStream;

import java.sql.Connection;
import java.sql.DriverManager;

import java.sql.SQLException;

import java.util.Properties;

import org.apache.log4j.Logger;

public class DBUtil {
    
    private static Connection connection;
    private static Properties prop;
    
    private static Logger logger = Logger.getLogger(DBUtil.class);
    
    protected DBUtil(){
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        InputStream input = classLoader.getResourceAsStream("hl/ws/rest/properties/userapp.properties");
        prop = new Properties();
        try {
            prop.load(input);
        } catch (IOException e) {
            logger.error("[DBUtil<>] IOException Occured " , e);
        }
    }
    
    public static Connection getConnection(){
        if(null == connection){
            try {
                Class.forName(prop.getProperty("DRIVER"));
                connection = DriverManager.getConnection(prop.getProperty("URL"));
            } catch (ClassNotFoundException e) {
                logger.error("[DBUtil : getConnection] ClassNotFoundException Occured " , e);
            } catch (SQLException e) {
                logger.error("[DBUtil : getConnection] SQLException Occured " , e);
            }
        }
        return connection;
    }
}
