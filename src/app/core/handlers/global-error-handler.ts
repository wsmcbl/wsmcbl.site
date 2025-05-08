import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {ErrorDialogComponent} from '../../shared/error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler
{
    constructor(private injector: Injector)
    {
    }

    handleError(error: any): void
    {
        const dialog = this.injector.get(MatDialog);

        console.error('Global error:', error);

        dialog.open(ErrorDialogComponent, {
            data: {message: this.getMessage(error)}
        });
    }

    private getMessage(error: any): string
    {
        if (error instanceof Error)
        {
            return error.message;
        }

        return 'Ocurrió un error inesperado.';
    }
}
