import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<nav ngClass = "parent-menu">
  <ul>
   <li><a routerLink="/country" routerLinkActive="active">Country</a></li>
   <li><a routerLink="/person" routerLinkActive="active">Person</a></li>
   <li><a routerLink="/books" routerLinkActive="active">Books</a></li>
   <li><a routerLink="/articles" routerLinkActive="active">articles</a></li>
   <li><a routerLink="/bank" routerLinkActive="active">bank</a></li>
   <li><a routerLink="/collage" routerLinkActive="active">Collage</a></li>
  </ul> 
</nav>  
<div ngClass = "parent-container">	
  <router-outlet></router-outlet>	
</div>`

})
export class AppComponent {
  title = 'Custom-Error-Handler';
}
