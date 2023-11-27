import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from "../../components/quizz/quizz.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, QuizzComponent]
})
export class HomeComponent {

}
