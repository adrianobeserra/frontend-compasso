import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiSearchComponent } from './pages/api-search/api-search.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GitHubService } from '../service/github.service';
import { ReposComponent } from './pages/repos/repos.component';
import { BooleanPipe } from './shared/pipe/boolean-pipe.pipe';
import { StarredsComponent } from './pages/starreds/starreds.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { TopLayoutComponent } from './shared/layout/top-layout/top-layout.component';
import { BottomLayoutComponent } from './shared/layout/bottom-layout/bottom-layout.component';

@NgModule({
  declarations: [AppComponent, ApiSearchComponent, ReposComponent, BooleanPipe, StarredsComponent, TopLayoutComponent, BottomLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    routing
  ],
  providers: [GitHubService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
