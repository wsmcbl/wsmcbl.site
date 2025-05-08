import {Component, Inject} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
    selector: 'app-error-dialog',
    imports: [
        MatDialogContent,
        MatDialogActions,
        MatDialogTitle,
        MatButton,
        MatDialogClose
    ],
    templateUrl: './error-dialog.component.html',
    styleUrl: './error-dialog.component.css'
})
export class ErrorDialogComponent
{
    constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string })
    {
    }
}
