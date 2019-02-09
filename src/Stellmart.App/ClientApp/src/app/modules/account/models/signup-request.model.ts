export interface SignupRequest {
    email: string;
    password: string;
    securityQuestions: string[];
    securityAnswers: string[];
}
