import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      token: "",
      updateToken: (token) => set(() => ({ token: token })),
    }),
    {
      name: "user-details", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const authStore = create(
  persist(
    (set) => ({
      isAllowed: true,
      updateIsAllowed: (value) => set(() => ({ isAllowed: value })),
    }),
    {
      name: "isAuth", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
