import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-spell-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.css'
})
export class SpellCardComponent {
  @Input()
  spell!: { id: number; name: string; level: string; };

  async ngOnInit() { }
}