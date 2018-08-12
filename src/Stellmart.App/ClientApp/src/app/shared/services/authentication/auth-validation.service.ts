import { Injectable } from '@angular/core';
import { KJUR, KEYUTIL, hextob64u } from 'jsrsasign';

// http://openid.net/specs/openid-connect-implicit-1_0.html

@Injectable({
    providedIn: 'root'
  })
export class AuthValidationService {

    // id_token C7: The current time MUST be before the time represented by the exp Claim (possibly allowing for some small
    // leeway to account for clock skew).
    public IsTokenExpired(token: string, offsetSeconds?: number): boolean {

        let decoded: any;
        decoded = this.GetPayloadFromToken(token, false);

        const tokenExpirationDate: Date = this.getTokenExpirationDate(decoded);
        offsetSeconds = offsetSeconds || 0;

        if (tokenExpirationDate == null) {
            return false;
        }

        // Token expired?
        return !(tokenExpirationDate.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    }

    // id_token C9: The value of the nonce Claim MUST be checked to verify that it
    // is the same value as the one that was sent in the Authentication Request.
    // The Client SHOULD check the nonce value for replay attacks.The precise method for detecting replay attacks is Client specific.
    public Validate_id_token_nonce(dataIdToken: any, local_nonce: any): boolean {
        if (dataIdToken.nonce !== local_nonce) {
            console.log('Validate_id_token_nonce failed');
            return false;
        }

        return true;
    }

    // id_token C1: The Issuer Identifier for the OpenID Provider (which is typically
    // obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
    public Validate_id_token_iss(dataIdToken: any, client_id: any): boolean {
        if (dataIdToken.iss !== client_id) {
            console.log('Validate_id_token_iss failed');
            return false;
        }

        return true;
    }

    // id_token C2: The Client MUST validate that the aud (audience) Claim contains
    // its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a
    // valid audience, or if it contains additional audiences not trusted by the Client.
    public Validate_id_token_aud(dataIdToken: any, aud: any): boolean {
        if (dataIdToken.aud !== aud) {
            console.log('Validate_id_token_aud failed');
            return false;
        }

        return true;
    }

    public ValidateStateFromHashCallback(state: any, local_state: any): boolean {
        if (state !== local_state) {
            console.log('ValidateStateFromHashCallback failed');
            return false;
        }

        return true;
    }

    public GetPayloadFromToken(token: any, encode: boolean): any {
        let data: any = {};
        if (typeof token !== 'undefined') {
            const encoded: any = token.split('.')[1];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    public GetHeaderFromToken(token: any, encode: boolean): any {
        let data: any = {};
        if (typeof token !== 'undefined') {
            const encoded: any = token.split('.')[0];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    public GetSignatureFromToken(token: any, encode: boolean): any {
        let data: any = {};
        if (typeof token !== 'undefined') {
            const encoded: any = token.split('.')[2];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    // id_token C5: The Client MUST validate the signature of the ID Token according to
    // JWS [JWS] using the algorithm specified in the alg Header Parameter of the JOSE Header.
    // The Client MUST use the keys provided by the Issuer.
    // id_token C6: The alg value SHOULD be RS256. Validation of tokens using other signing
    // algorithms is described in the OpenID Connect Core 1.0 [OpenID.Core] specification.
    public Validate_signature_id_token(id_token: any, jwtkeys: any): boolean {

        if (!jwtkeys || !jwtkeys.keys) {
            return false;
        }

        const header_data: any = this.GetHeaderFromToken(id_token, false);
        const kid: any = header_data.kid;
        const alg: any = header_data.alg;

        if ('RS256' !== alg) {
            console.log('Only RS256 supported');
            return false;
        }

        let isValid: boolean = false;

        for (const key of jwtkeys.keys) {
            if (key.kid === kid) {
                const publickey: any = KEYUTIL.getKey(key);
                isValid = KJUR.jws.JWS.verify(id_token, publickey, ['RS256']);
                return isValid;
            }
        }

        return isValid;
    }

    // Access Token Validation
    // access_token C1: Hash the octets of the ASCII representation of the access_token
    // with the hash algorithm specified in JWA[JWA] for the alg Header Parameter of the
    // ID Token's JOSE Header. For instance, if the alg is RS256, the hash algorithm used is SHA-256.
    // access_token C2: Take the left- most half of the hash and base64url- encode it.
    // access_token C3: The value of at_hash in the ID Token MUST match the value produced
    // in the previous step if at_hash is present in the ID Token.
    public Validate_id_token_at_hash(access_token: any, at_hash: any): boolean {

        const hash: string = KJUR.crypto.Util.hashString(access_token, 'sha256');
        const first128bits: string = hash.substr(0, hash.length / 2);
        const testdata: any = hextob64u(first128bits);

        if (testdata === at_hash) {
            return true;
        }

        return false;
    }

    private getTokenExpirationDate(dataIdToken: any): Date {
        if (!dataIdToken.hasOwnProperty('exp')) {
            return null;
        }

        const date: Date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(dataIdToken.exp);

        return date;
    }


    private urlBase64Decode(str: string): string {
        let output: string = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('Illegal base64url string!');
        }

        return window.atob(output);
    }
}
