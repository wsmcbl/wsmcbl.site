import {Component, Injectable} from '@angular/core';
import {ViewGradeOnlineController} from './view-grade-online.controller';
import {StudentDto} from './student.dto';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Injectable({providedIn: 'root'})

@Component({
    selector: 'app-view-grade-online',
    imports: [
        NgIf,
        FormsModule
    ],
    templateUrl: './view-grade-online.component.html',
    styleUrl: './view-grade-online.component.css'
})

export class ViewGradeOnlineComponent
{
    studentData: StudentDto | null = null;
    studentDto: { studentId: string, token: string } = { studentId: '', token: '' };
    isLoading = false;
    errorMessage = '';

    constructor(private controller: ViewGradeOnlineController)
    {
    }

    onSubmit(form: any): void {
        if (form.valid) {
            this.isLoading = true;
            this.errorMessage = '';

            this.controller.getStudent(this.studentDto).subscribe({
                next: (student) => {
                    this.isLoading = false;
                    this.studentData = student;
                },
                error: (err) => {
                    this.isLoading = false;
                    this.errorMessage = 'Credenciales incorrectas';
                    console.error('Login error:', err);
                }
            });
        }
    }

    logout(): void {
        this.studentData = null; // Vuelve a mostrar el formulario de login
    }

}
