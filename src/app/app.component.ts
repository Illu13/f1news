import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    http = inject(HttpClient);
    title = "F1News";
}
