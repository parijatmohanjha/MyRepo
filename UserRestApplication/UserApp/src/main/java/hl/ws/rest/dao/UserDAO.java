package hl.ws.rest.dao;

import hl.ws.rest.bean.UserBean;

import java.util.List;

public interface UserDAO {
    
    List<UserBean> getUsers();
    
    UserBean getUserDetails(String username);
    
    boolean validateUser(String user, byte[] password);
}
