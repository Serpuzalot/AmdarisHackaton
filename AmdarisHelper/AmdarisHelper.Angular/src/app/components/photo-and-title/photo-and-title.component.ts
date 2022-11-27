import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-photo-and-title',
  templateUrl: './photo-and-title.component.html',
  styleUrls: ['./photo-and-title.component.scss']
})
export class PhotoAndTitleComponent {

  @Input()
  title: string;

  @Input()
  photoPath: string;

  constructor() {
  }

}
