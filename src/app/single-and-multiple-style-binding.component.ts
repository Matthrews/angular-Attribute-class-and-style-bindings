@Component({
  selector: 'app-nav-bar',
  template: `
<nav [style]='navStyle'>
  <a [style.text-decoration]="activeLinkStyle">Home Page</a>
  <a [style.text-decoration]="linkStyle">Login</a>
</nav>`
})
export class NavBarComponent {
  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';
  /* . . . */
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/