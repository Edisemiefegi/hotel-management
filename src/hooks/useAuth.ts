import { account, ID, tableDB } from "@/appwriteConfig";
import { useAuthStore } from "@/store/authStore";
import { Query } from "appwrite";

const db_Id = "admin-id";
const users_Id = "users";

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

      const data = {
        username: form.fullname,
        email: form.email,
        status: "user",
      };
      const sessionUser = await account.get();

      const user = await tableDB.createRow({
        databaseId: db_Id,
        tableId: users_Id,
        rowId: sessionUser.$id,
        data: data,
      });
      setUser(user);
      return user;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const signin = async (form: Form) => {
    try {
      try {
        const acct = await account.get();
        // If this succeeds, user is already logged in
        console.log(acct, "acct");

        return useAuthStore.getState().user;
      } catch {
      }

      await account.createEmailPasswordSession({
        email: form.email,
        password: form.password,
      });

      const sessionUser = await account.get();
      const user = await tableDB.listRows({
        databaseId: db_Id,
        tableId: users_Id,
        queries: [Query.equal("$id", sessionUser.$id)],
      });

      console.log(user, "user ");

      if (!user.rows.length) {
        throw new Error("User profile not found in database");
      }

      setUser(user.rows[0]);
      return user.rows[0];
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
