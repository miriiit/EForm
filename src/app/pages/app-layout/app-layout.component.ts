import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/constants/app.constant';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  defaultRoute: string = AppConstants.ROUTES.FormIo.list.relativePath;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.navLinks = [
      {
        label: 'Available Forms',
        link: AppConstants.ROUTES.FormIo.list.relativePath,
        index: 0
      },
      {
        label: 'E Forms Requests',
        link: AppConstants.ROUTES.Requests.avaialable.relativePath,
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    this.router.navigate([this.defaultRoute], {relativeTo: this.activatedRoute})
  }
}
