import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";

interface Customer {
  //
}

interface Viewer {
  firstName: "";
  email: "";
  avatar: {
    url: "";
  };
}

// TODO: useAuth()
export const useAuth = () => {
  const avatar = computed(() => viewer.value?.avatar?.url ?? null);
  const wishlistLink = computed<string>(() =>
    viewer.value ? "/my-account?tab=wishlist" : "/wishlist"
  );
  const customer = useState<Customer>("customer", () => ({
    billing: {},
    shipping: {},
  }));
  const viewer = useState<Viewer | null>("viewer", () => null);
  const isPending = useState<boolean>("isPending", () => false);

  // Log in the user
  const loginUser = () => {
    //
  };

  // Log out the user
  const logoutUser = () => {
    //
  };

  // Register the user
  const registerUser = async (userInfo: {
    email: string;
    password: string;
    username: string;
  }) => {
    try {
      const registerResponse = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      const user = registerResponse.user;

      await setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        username: userInfo.username,
      });

      return { success: true, error: null };
    } catch (error) {
      return { success: false, error };
    }
  };

  // Update the user state
  const updateCustomer = () => {
    //
  };

  const updateViewer = (payload: Viewer): void => {
    viewer.value = payload;
    isPending.value = false;
  };

  const sendResetPasswordEmail = () => {
    //
  };

  const resetPasswordWithKey = () => {
    //
  };

  const getOrders = () => {
    //
  };

  const getDownloads = () => {
    //
  };

  return {
    viewer,
    customer,
    isPending,
    avatar,
    wishlistLink,
    loginUser,
    updateCustomer,
    updateViewer,
    logoutUser,
    registerUser,
    sendResetPasswordEmail,
    resetPasswordWithKey,
    getOrders,
    getDownloads,
  };
};
