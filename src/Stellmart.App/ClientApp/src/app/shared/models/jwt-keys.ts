export class JwtKeys {
    public keys: JwtKey[];
}

export class JwtKey {
    public kty: string;
    public use: string;
    public kid: string;
    public x5t: string;
    public e: string;
    public n: string;
    public x5c: any[];
}
