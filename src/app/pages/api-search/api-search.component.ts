import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { GitHubService } from 'src/service/github.service';

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.scss']
})
export class ApiSearchComponent implements OnInit {

  constructor(private gitHubService: GitHubService, private toastrService: ToastrService,
              private route: ActivatedRoute) {
    this.model = this.route.snapshot.params.user;
  }

  model: any;
  searching = false;
  searchFailed = false;
  userSelected: boolean;
  repos: any[];
  starreds: any[];
  showRepos = false;
  showStarreds = false;

  formatter = (x: { login: string }) => x.login;

  ngOnInit() {
    this.model = this.route.snapshot.params.user;
  }

  changedModel(e) {
    this.userSelected = (typeof (e) === 'object');
    if (this.userSelected) {
      this.getUser(this.model.login);
    } else {
      this.showRepos = false;
      this.showStarreds = false;
    }
  }

  getUser(user: string) {
    this.gitHubService.getUser(user)
      .subscribe(
        data => {
          this.model = data;
        },
        erro => {
          console.log(erro);
        }
      );
  }

  getRepos(user: string) {
    this.gitHubService.getRepos(user)
      .subscribe(
        data => {
          this.repos = data;
          this.showStarreds = false;
          this.showRepos = true;
        },
        erro => {
          console.log(erro);
          this.toastrService.error(erro.message, 'Erro');
        }
      );
  }

  getStarreds(user: string) {
    this.gitHubService.getStarreds(user)
      .subscribe(
        data => {
          this.starreds = data;
          this.showStarreds = true;
          this.showRepos = false;
        },
        erro => {
          this.toastrService.error(erro.message, 'Erro');
        }
      );
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(term => this.gitHubService.search(term).pipe(
        tap(() => (this.searchFailed = false)),
        catchError(() => {
          this.toastrService.error('Erro ao processar a requisição.');
          this.searchFailed = true;
          return of([]);
        })
      )
      ),
      tap(() => (this.searching = false))
    )
}


