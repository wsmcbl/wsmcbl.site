import {ApiConsumer} from '../../../core/api-consumer';
import {ModuleType} from '../../../core/module-type';
import {BasicStudentDto} from './basic-student.dto';
import {map, Observable} from 'rxjs';
import {StudentDto} from './student.dto';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class ViewGradeOnlineController
{
  constructor(private readonly apiConsumer: ApiConsumer){}

  getStudent(dto: BasicStudentDto): Observable<StudentDto>
  {
    return this.apiConsumer.get(ModuleType.Academy, `students/${dto.studentId}?token=${dto.token}`, new StudentDto({}))
    .pipe(map(data => StudentDto.fromJson(data)));
  }
}
