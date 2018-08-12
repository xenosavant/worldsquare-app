import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private _storage: any;

    constructor() {
        this._storage = sessionStorage;
    }

    public retrieve(key: string): any {
        const item: any = this._storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this._storage.getItem(key));
        }
        return;
    }

    public store(key: string, value: any): void {
        this._storage.setItem(key, JSON.stringify(value));
    }
}
