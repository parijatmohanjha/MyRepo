package hl.ws.rest.dao;

import hl.ws.rest.bean.UserBean;

import java.util.Collections;
import java.util.List;

public class UserDAOImpl implements UserDAO {
    
    public List<UserBean> getUsers() {
        return Collections.emptyList();
    }

    public UserBean getUserDetails(String username) {
        return null;
    }

    public boolean validateUser(String user, byte[] password) {
        return false;
    }
}
