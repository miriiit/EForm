import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.scss']
})
export class PortletComponent {

  @Input()
  isActions: boolean = false;

  @Input()
  title: string = 'Portlet';

  @Input()
  titleInfo: string = '... tab view';

}
