import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthService } from '../service/authservice.js';
import { toast } from 'sonner';
import { decodeToken } from '../utils/tokenUtil.js';


const useAuthStore = create(
  devtools(
    persist(
      (set, getState) => ({
        user: null,
        accessToken: null,
        isAuthenticated: false,
        role:null,
        isLoading: true,
        error: null,
        signUpError: null,
        profileStrength:null,

        login: async (authType,  phone, password, googleId, googleToken,userType ) => {
          set({ isLoading: true, error: null });
          const { data, error } = await AuthService.loginService({ authType,  phone, password, googleId, googleToken,userType });

          if (error) {
            set({ error: error, isLoading: false });
           
            throw false;
          }

          toast.success('Logged in successfully.');
        const { user } = data.data;
        const {accessToken,refreshToken} = data.data
        console.log('accesstoken:)',accessToken)
        console.log('User detail:)',user)
        set({
          user,
          accessToken,
          refreshToken,
          role:user.userType,
          isAuthenticated: true,
          isLoading: false,
        });
          return true;
        },
        googleAuthRegister: async (googleToken,authType,userType,email,name) => {
          set({ isLoading: true, error: null });
            await decodeToken(googleToken)
          const { data, error } = await AuthService.registerService({googleToken,authType,userType,email,name});

          if (!data || error) {
            set({ error: error, isLoading: false });
            return;
          }

          const { user } = data.data;
          const {accessToken,refreshToken} = data.data

          set({
            user,
            accessToken,
            refreshToken,
            role:user.userType,
            isAuthenticated: true,
            isLoading: false,
          });
          toast.success('Registered successfully.');
          return data;
        }
        ,

        googleAuthLogin: async (googleToken,authType,userType,email) => {
         
         
          set({ isLoading: true, error: null });
          const { data, error } = await AuthService.loginService({googleToken,authType,userType,email });

          if (!data || error) {
            set({ error: error, isLoading: false });
            return;
          }

          const { user   } = data.data;
          const {accessToken,refreshToken} = data.data;

          set({
            user,
            accessToken,
            role:user.userType,
            refreshToken,
            isAuthenticated: true,
            isLoading: false,
          });
          toast.success('Logged in successfully.');
          
        },

        register: async (authType, userType, phone,email,password, googleToken) => {
          set({ isLoading: true, signUpError: null });
          const { data, error } = await AuthService.registerService({authType, userType, phone,email,password, googleToken });

          if (error) {
            set({ signUpError: error, isLoading: false });
            return false;
          }

          toast.success('OTP shared successfully');
          const { user, token: accessToken } = data;

          
          return true;
        },
        verifyOtp: async (body) => {
  set({ isLoading: true, error: null });
  const { data, error } = await AuthService.otpVerificationService(body);

  if (error) {
    set({ error, isLoading: false });
    toast.error('Invalid OTP');
    return false;
  }

  const { user } = data.data;
  const {accessToken,refreshToken} = data.data
  console.log('accesstoken:)',accessToken)
  console.log('User detail:)',user)
  set({
    user,
    accessToken,
    refreshToken,
    role:user.userType,
    isAuthenticated: true,
    isLoading: false,
  });

  toast.success('Account verified successfully!');
  return true;
},

        logout: async () => {
          set({ isLoading: true, error: null });
          const { error } = await AuthService.logout();
          if (error) {
            set({ error: error, isLoading: false });
            return { error: error, status: false };
          }
          await getState().clearState();
          return { error: null, status: true };
        },

        refreshAccessToken: async () => {
        set({ error: null });

        if (!getState().isAuthenticated) {
          return;
        }
        const { refreshToken } = getState();
        const { data, error } = await AuthService.refreshToken({refreshToken});

        console.log('AuthStore: Token refreshed:', data, error);

        if (error) {
          console.log('Refresh token error', error);
          set({ error: error, isLoading: false });
          await getState().logout();
          return error;
        }

        const { accessToken:newToken } = data.data;
        set({ accessToken:newToken, isLoading: false });
        return newToken;
      },

        fetchUser: async () => {
          const { data: user, error } = await AuthService.fetchUser();

          if (error) {
            set({ error: error, isLoading: false });
            return;
          }

          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        },

        setHasHydrated: async (state) => {
          if (state.isAuthenticated) {
            await getState().refreshToken();
            await getState().refreshUser();
            return;
          }

          console.log('AuthStore: No user found, clearing state...');
          set({
            isLoading: false,
            user: null,
            role:null,
            accessToken: null,
            isAuthenticated: false,
            error: null,
          });
        },

        refreshUser: async () => {
          const token = getState().refreshToken;
          if (!token) {
            set({
              isLoading: false,
              user: null,
              role:null,
              accessToken: null,
              isAuthenticated: false,
              error: 'Failed to refresh token',
            });
            return;
          }

          await getState().fetchUser();
        },

        setState: ({ isLoading, isAuthenticated, user, accessToken,profileStrength }) => {
          set({ isLoading, isAuthenticated, user, accessToken ,profileStrength});
        },
        setProfileStrength:({ profileStrength }) => {
          set({ profileStrength});
        },

        updateProfilePicture: (profilePicture) => {
          set((state) => ({
            user: state.user ? { ...state.user, profilePicture } : state.user,
          }));
        },

        clearState: async () => {
          set({
            user: null,
            accessToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
            signUpError: null,
            profileStrength:null
          });
        },
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          isAuthenticated: state.isAuthenticated,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          role: state.role,
          user: state.user,
          profileStrength:state.profileStrength
        }),
        onRehydrateStorage: () => {
          return (state, error) => {
            if (error) {
              console.error('AuthStore: Failed to rehydrate state:', error);
              state?.clearState();
              return;
            }
            state?.setHasHydrated(state);
          };
        },
      }
    ),
    { name: 'auth-store', enabled: true }
  )
);

export default useAuthStore;
