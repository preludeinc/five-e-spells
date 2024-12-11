import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class AppApiService {

    constructor(private http: HttpClient) { }

    getSpells(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.API_URL}/api/spells`);
    }
}