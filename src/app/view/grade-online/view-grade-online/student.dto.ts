export class StudentDto
{
    studentId!: string;
    studentName!: string;
    teacherName!: string;
    enrollment?: string;
    hasSolvency!: boolean;

    constructor(data: Partial<StudentDto>)
    {
        Object.assign(this, data);
    }

    static fromJson(data: any): StudentDto
    {
        return new StudentDto({
            studentId: data.studentId,
            studentName: data.studentName,
            teacherName: data.teacherName,
            enrollment: data.enrollment,
            hasSolvency: data.hasSolvency,
        });
    }
}
