interface InterfaceAuthService {
    logIn(email: string, password: string): Promise<Object>;
    signUp(email: string, password: string): Promise<Object>;
}
