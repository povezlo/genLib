import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss']
})
export class SkillBoxComponent {
  @Input() skills: string[] = [];
}
