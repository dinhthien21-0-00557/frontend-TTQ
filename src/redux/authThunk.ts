import { auth } from "../data/firebase";
import { setUser, setError } from "./authSlice";

export const loginAsync =
  (email: any, password: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "auth/setUser" | "auth/setError";
    }) => void
  ) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      dispatch(setUser(user));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
