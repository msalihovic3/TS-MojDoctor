package ba.unsa.etf.nwt.user_service.response;

public class JwtAuthenticationResponse {
    private Integer userId;
    private String accessToken;

    private String code;
    private String tokenType = "Bearer";

    public JwtAuthenticationResponse(Integer userId, String accessToken, String code) {
        this.userId = userId;
        this.accessToken = accessToken;
        this.code = code;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}