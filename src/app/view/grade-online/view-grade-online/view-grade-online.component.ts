import {Component, Injectable} from '@angular/core';
import {ViewGradeOnlineController} from './view-grade-online.controller';
import {StudentDto} from './student.dto';
import {BasicStudentDto} from './basic-student.dto';
import {Observable} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-view-grade-online',
  imports: [
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './view-grade-online.component.html',
  styleUrl: './view-grade-online.component.css'
})

export class ViewGradeOnlineComponent
{
  student?: Observable<StudentDto>;
  studentDto: BasicStudentDto = {};

  constructor(private controller : ViewGradeOnlineController)
  {
  }

  getStudent(): void
  {
    this.student = this.controller.getStudent(this.studentDto!);
  }
}
