import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const USER_TO_REPLACE = '<USER>';
export const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';
export const GITHUB_USER_URL = 'https://api.github.com/users/';
export const GITHUB_REPOS_URL = 'https://api.github.com/users/'.concat(USER_TO_REPLACE).concat('/repos');
export const GITHUB_STARREDS_URL = 'https://api.github.com/users/'.concat(USER_TO_REPLACE).concat('/starred');

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const httpOptions = {
    headers
};

@Injectable()
export class GitHubService {
    constructor(private http: HttpClient) { }

    search(term: string) {
        if (term === '') {
            return of([]);
        }
        const params = new HttpParams()
            .set('q', term);
        return this.http
            .get(GITHUB_SEARCH_URL, { params })
            .pipe(map((response) => response['items']));
    }

    getUser(user: string): Observable<any> {
        if (user === '') {
            return of([]);
        }
        return this.http
            .get(GITHUB_USER_URL + user, httpOptions);
    }

    getRepos(user: string): Observable<any> {
        if (user === '') {
            return of([]);
        }
        return this.http
            .get(GITHUB_REPOS_URL.replace(USER_TO_REPLACE, user), httpOptions);
    }

    getStarreds(user: string): Observable<any> {
        if (user === '') {
            return of([]);
        }
        return this.http
            .get(GITHUB_STARREDS_URL.replace(USER_TO_REPLACE, user), httpOptions);
    }
}
