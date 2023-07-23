import axios from "../utils/axios";

export const test = async () => {
  // setTimeout(async () =>{
  // }, 3000)
  const result = await axios.get(`/`);
  return result.data;
};

export const signUp = async ({ email, role }) => {
  const result = await axios.post("/auth/signup", {
    email: email,
    role: role
  });
  return result.data
};
