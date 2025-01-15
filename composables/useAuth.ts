import {
	createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firestore, auth } from './firebase';
import { UserInfo } from '~/types';

interface Customer {
	//
}

interface Viewer {
	firstName: '';
	email: '';
	avatar: {
		url: '';
	};
}

export const useAuth = () => {
  const user = useState<User | null>('user', () => null);
	const avatar = computed(() => viewer.value?.avatar?.url ?? null);
	const wishlistLink = computed<string>(() =>
		viewer.value ? '/my-account?tab=wishlist' : '/wishlist',
	);
	const customer = useState<Customer>('customer', () => ({
		billing: {},
		shipping: {},
	}));
	const viewer = useState<Viewer | null>('viewer', () => null);
  const isPending = useState<boolean>('isPending', () => false);
  const loading = useState<boolean>('loading', () => true);

  const init = async () => {
    try {
      loading.value = true;
      onAuthStateChanged(auth, (userData) => {
        user.value = userData;
        loading.value = false;
      });
    } catch (error) {
      console.error('Auth error:', error);
      loading.value = false;
    }
  };

	// Log in the user
  const loginUser = async (userInfo: UserInfo): Promise<{ success: boolean; error: any }> => {
		isPending.value = true;
    console.log("user info", userInfo)
    console.log(auth, "AUTH")
		try {
			const { user: userData } = await signInWithEmailAndPassword(
				auth,
				userInfo.email,
				userInfo.password,
      );

      const token = await userData.getIdToken();
      console.log(token, "TOKEN")
      const cookie = useCookie('auth_token');
      cookie.value = token;

			// const user = userData.user;
			console.log('Login successful:', userData);
			// You can redirect or handle the logged-in user here

			return {
				success: true,
				error: null,
			};
		} catch (error: any) {
			console.error('Error logging in:', error.message);
			throw error;
		}
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
				userInfo.password,
			);

			const user = registerResponse.user;

			await setDoc(doc(firestore, 'users', user.uid), {
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
    init,
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
