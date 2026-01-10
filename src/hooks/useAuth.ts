/* eslint-disable @typescript-eslint/no-explicit-any */
import { account, ID, tableDB } from "@/appwriteConfig";
import { useAuthStore, type User } from "@/store/authStore";
import { Query } from "appwrite";

const db_Id = "admin-id";
const users_Id = "users";

export type Form = {
  email: string;
  password: string;
  fullname?: string;
};

export const useAuth = () => {
  const { setUser, user } = useAuthStore();

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

      const user = await tableDB.createRow<User>({
        databaseId: db_Id,
        tableId: users_Id,
        rowId: sessionUser.$id,
        data: data as any,
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
      //check if there's a session and delete it
      try {
        await account.get();
        await logout()
      } catch {
        // No active session exists, which is fine - continue with login
        console.log("No active session found");
      }

      //login the user
      await account.createEmailPasswordSession({
        email: form.email,
        password: form.password,
      });

      const sessionUser = await account.get();

      //get the user profile from the database
      const res = await tableDB.listRows<User>({
        databaseId: db_Id,
        tableId: users_Id,
        queries: [Query.equal("$id", sessionUser.$id)],
      });

      if (!res?.rows?.length) {
        throw new Error("User profile not found in database");
      }

      return await getUser()
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


  const getUser = async (): Promise<User> => {
    try {
      const sessionUser = await account.get();
      //get the user profile from the database
      const res = await tableDB.listRows<User>({
        databaseId: db_Id,
        tableId: users_Id,
        queries: [Query.equal("$id", sessionUser.$id)],
      });

      if (!res?.rows?.length) {
        throw new Error("User profile not found in database");
      }

      const user = res.rows[0];
      setUser(user);

      return user;
    } catch (error) {
      console.error("Get user error:", error);
      throw error;
    }
  }


  const authenticateUser = async () => {
    try {
      const session = await account.get();
      console.log(session, "session");
      if (!session || !session?.status) {
        console.log("No session found");
        await logout();
        throw new Error("No session found");
      }


    } catch (error) {
      console.error("Authenticate user error:", error);
      setUser(null);
      throw error
    }
  }


  return {
    signup,
    signin,
    logout,
    user,
    authenticateUser
  };
};
