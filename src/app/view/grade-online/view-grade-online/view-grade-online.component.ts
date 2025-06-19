import {Component, Injectable} from '@angular/core';
import {ViewGradeOnlineController} from './view-grade-online.controller';
import {StudentDto} from './student.dto';
import {SafePipe} from './safe.pipe';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Injectable({providedIn: 'root'})

@Component({
    selector: 'app-view-grade-online',
    imports: [
        NgIf,
        FormsModule,
        SafePipe,
    ],
    templateUrl: './view-grade-online.component.html',
    styleUrl: './view-grade-online.component.css'
})

export class ViewGradeOnlineComponent
{
    studentData: StudentDto | null = null;
    studentDto: { studentId: string, token: string } = {studentId: '', token: ''};
    isLoading = false;
    errorMessage = '';
    pdfData: string | null = null;
    isPdfLoading = false;


    dateToShowGrade: Date;
    ShowGrade: boolean;

    constructor(private controller: ViewGradeOnlineController)
    {
        this.dateToShowGrade = new Date(Date.UTC(2025, 6, 28, 13, 0, 0));
        const now = new Date();
        this.ShowGrade = now > this.dateToShowGrade;
    }

    getFormattedDate(): string {
        const localDate = new Date(this.dateToShowGrade);
        localDate.setHours(localDate.getHours() - 6);

        return localDate.toLocaleString('es-MX', {
            timeZone: 'UTC',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    onSubmit(form: any): void
    {
        if (form.valid)
        {
            this.isLoading = true;
            this.errorMessage = '';

            this.controller.getStudent(this.studentDto).subscribe({
                next: (student) =>
                {
                    this.isLoading = false;
                    this.studentData = student;
                    if (student.hasSolvency)
                    {
                        this.getStudentFile();
                    }
                },
                error: (err) =>
                {
                    this.isLoading = false;
                    this.errorMessage = 'Credenciales incorrectas';
                    console.error('Login error:', err);
                }
            });
        }
    }

    logout(): void
    {
        this.studentData = null;
        this.studentDto = {studentId: '', token: ''};
        this.pdfData = null;
    }

    getStudentFile(): void
    {
        this.isPdfLoading = true;
        this.controller.getStudentFile(this.studentDto).subscribe({
            next: (blob) =>
            {
                this.isPdfLoading = false;
                this.pdfData = URL.createObjectURL(blob);
            },
            error: (err) =>
            {
                this.isPdfLoading = false;
                console.error('Error al obtener PDF:', err);
            }
        });
    }

    downloadFileFromUrl(): void
    {
        if (!this.pdfData) return;

        const a = document.createElement('a');
        a.href = this.pdfData;
        a.download = `Calificaciones de ${this.studentData?.studentName}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

}
