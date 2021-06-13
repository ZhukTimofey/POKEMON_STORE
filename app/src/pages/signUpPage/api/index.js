import api from "../../../api/apiConfig";

export const signUp = (body) => api.post("auth/signup", body);
