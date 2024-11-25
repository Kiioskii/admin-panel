const supabase = require("../../config/supabase");

class AuthService implements InterfaceAuthService {
    async logIn(email: string, password: string): Promise<Object> {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw new Error(error.message);
        return data;
    }

    async signUp(email: string, password: string): Promise<Object> {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw new Error(error.message);
        return data;
    }
}
