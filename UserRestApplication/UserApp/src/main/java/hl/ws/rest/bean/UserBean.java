package hl.ws.rest.bean;

public class UserBean {

    private String name;
    private String username;
    private byte[] password;
    private String userType;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setPassword(byte[] password) {
        this.password = password;
    }

    public byte[] getPassword() {
        return password;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getUserType() {
        return userType;
    }

    public String toString() {
        return "User[Name : " + this.getName() + ", Username : " + this.getUsername() + ", UserType : " +
            this.getUserType() + "]";
    }
}
