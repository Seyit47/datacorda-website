import { defineStore } from "pinia";
import type { AuthUser } from "@/types/response/auth";
import type { UserState } from "@/types/store/auth";

export const useAuthStore = defineStore("users", {
    state: (): UserState => ({
        user: null,
    }),
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    actions: {
        setUser(user: AuthUser | null) {
            this.user = user;
        },
    },
});
