import { defineStore } from 'pinia';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	type User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firestore, auth } from '~/composables/firebase';
import { UserInfo } from '~/types';

interface AuthState {
  user: User | null; // `User` comes from Firebase Auth types
  loading: boolean;
  error: string | null;
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		user: null, // Thông tin người dùng
		loading: false,
		error: null,
	}),

  actions: {
    initAuthListener() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          console.log("User restored:", user);
        } else {
          this.user = null;
        }
      });
    },
    
		async loginUser(
			userInfo: UserInfo,
		): Promise<{ success: boolean; error: any }> {
			console.log('user info', userInfo);
			console.log(auth, 'AUTH');
			try {
				const { user: userData } = await signInWithEmailAndPassword(
					auth,
					userInfo.email,
					userInfo.password,
				);

				const token = await userData.getIdToken();
				console.log(token, 'TOKEN');
				const cookie = useCookie('auth_token');
				cookie.value = token;

        console.log('Login successful:', userData);
        this.user = userData;

				return {
					success: true,
					error: null,
				};
			} catch (error: any) {
				console.error('Error logging in:', error.message);
				throw error;
			}
		},

		logout() {
			auth.signOut();
			this.user = null;
			useRouter().push('/login');
		},
	},
});
