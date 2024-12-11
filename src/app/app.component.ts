import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { SpellCardComponent } from "./spell-card/spell-card.component";
import { AppApiService } from './app-api.service';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpellCardComponent, 
            RouterOutlet, 
            MatGridListModule, 
            CommonModule],
  templateUrl: './app.component.html'
})

export class AppComponent {
  spells: any = [];
  spellSubscription!: Subscription;

  constructor(private appService: AppApiService) { }

    async ngOnInit() {
      this.spellSubscription = this.appService.getSpells().subscribe(data => {
        let mapped = data.map((spell, index) => {;
        // map over these entries to create cards
        return { 
          id: index,
          level: spell.level,
          name: spell.name,
         };
      });
      this.spells = mapped;
    })
  }
  
  ngOnDestroy() {
    this.spellSubscription.unsubscribe();
  }
}
