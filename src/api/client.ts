import { supabase } from "@/lib/supabase";

export interface ApiResponse<T = any> {
  success: boolean;
  error?: string;
  data?: T;
}

class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export const apiClient = {
  async handleRequest<T>(
    request: () => Promise<T>,
    errorMessage = "An unexpected error occurred"
  ): Promise<ApiResponse<T>> {
    try {
      const data = await request();
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : errorMessage,
      };
    }
  },

  auth: {
    async login(email: string, password: string) {
      return apiClient.handleRequest(async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw new ApiError(error.message);

        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("role, approved")
          .eq("id", data.user?.id)
          .single();

        if (userError) throw new ApiError(userError.message);

        return {
          user: data.user,
          role: userData.role,
          approved: userData.approved,
        };
      });
    },

    async register(
      email: string,
      password: string,
      userData: { firstName: string; lastName: string }
    ) {
      return apiClient.handleRequest(async () => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: userData },
        });

        if (error) throw new ApiError(error.message);
        return data;
      });
    },

    async logout() {
      return apiClient.handleRequest(async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw new ApiError(error.message);
        return true;
      });
    },
  },
};
