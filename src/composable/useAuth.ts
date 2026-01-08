import { account, ID } from "@/appwriteConfig";
import { useAuthStore } from "@/store/authStore";

export type Form = {
  email: string;
  password: string;
  fullname?: string;
};

export const useAuth = () => {
  const { setUser } = useAuthStore();

  const signup = async (form: Form) => {
    try {
      await account.create(
        ID.unique(),
        form.email,
        form.password,
        form.fullname
      );

      await account.createEmailPasswordSession({
        email: form.email,
        password: form.password,
      });

      const sessionUser = await account.get(); 
      setUser(sessionUser);
      return sessionUser;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const signin = async (form: Form) => {
    try {
      await account.createEmailPasswordSession({
        email: form.email,
        password: form.password,
      });

      const sessionUser = await account.get();
      setUser(sessionUser);
      return sessionUser;
    } catch (error) {
      console.error("Signin error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSessions();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return {
    signup,
    signin,
    logout,
  };
};
