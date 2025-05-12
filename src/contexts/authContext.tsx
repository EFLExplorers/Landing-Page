import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { apiClient } from "@/api/client";

interface AuthContextType {
  user: User | null;
  role: string | null;
  approved: boolean | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    userData: { firstName: string; lastName: string }
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [approved, setApproved] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        const { data: userData } = await supabase
          .from("users")
          .select("role, approved")
          .eq("id", session.user.id)
          .single();

        setRole(userData?.role ?? null);
        setApproved(userData?.approved ?? null);
      } else {
        setRole(null);
        setApproved(null);
      }

      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const response = await apiClient.auth.login(email, password);
    if (!response.success) {
      throw new Error(response.error);
    }
  };

  const register = async (
    email: string,
    password: string,
    userData: { firstName: string; lastName: string }
  ) => {
    const response = await apiClient.auth.register(email, password, userData);
    if (!response.success) {
      throw new Error(response.error);
    }
  };

  const logout = async () => {
    const response = await apiClient.auth.logout();
    if (!response.success) {
      throw new Error(response.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, role, approved, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
