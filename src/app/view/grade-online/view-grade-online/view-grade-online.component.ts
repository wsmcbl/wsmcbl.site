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
    pdfUrl: string | null = null;
    isPdfLoading = false;

    constructor(private controller: ViewGradeOnlineController)
    {
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
    }

    getStudentFile(): void
    {
        this.isPdfLoading = true;
        this.controller.getStudentFile(this.studentDto).subscribe({
            next: (blob) =>
            {
                this.isPdfLoading = false;
                this.pdfUrl = URL.createObjectURL(blob);
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
        if (!this.pdfUrl) return;

        const a = document.createElement('a');
        a.href = this.pdfUrl;
        a.download = `Calificaciones de ${this.studentData?.studentName}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

}
