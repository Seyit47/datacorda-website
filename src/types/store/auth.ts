import { AuthUser } from "@/types/response/auth";

export interface UserState {
    user: AuthUser | null;
}
