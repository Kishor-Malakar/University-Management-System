import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'main1',
  title: 'Student Details',
  type: 'document',
  fields: [
    defineField({
      name: 'studentImg',
      title: 'Student Img',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'studentNo',
      title: 'Student Number',
      type: 'string',
    }),
    defineField({
      name: 'studentPass',
      title: 'Student Password',
      type: 'string',
    }),
    defineField({
      name: 'dob',
      title: 'DOB',
      type: 'string',
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
    }),
    defineField({
      name: 'backlog',
      title: 'Backlog',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phno',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'subj1',
      title: 'Subject 1',
      type: 'string',
    }),
    defineField({
      name: 'subj2',
      title: 'Subject 2',
      type: 'string',
    }),
    defineField({
      name: 'subj3',
      title: 'Subject 3',
      type: 'string',
    }),
    defineField({
      name: 'subj4',
      title: 'Subject 4',
      type: 'string',
    }),
    defineField({
      name: 'subj5',
      title: 'Subject 5',
      type: 'string',
    }),
    defineField({
      name: 'att1',
      title: 'Attendance 1',
      type: 'string',
    }),
    defineField({
      name: 'att2',
      title: 'Attendance 2',
      type: 'string',
    }),
    defineField({
      name: 'att3',
      title: 'Attendance 3',
      type: 'string',
    }),
    defineField({
      name: 'att4',
      title: 'Attendance 4',
      type: 'string',
    }),
    defineField({
      name: 'att5',
      title: 'Attendance 5',
      type: 'string',
    }),
    defineField({
      name: 'score1',
      title: 'Score 1',
      type: 'string',
    }),
    defineField({
      name: 'score2',
      title: 'Score 2',
      type: 'string',
    }),
    defineField({
      name: 'score3',
      title: 'Score 3',
      type: 'string',
    }),
    defineField({
      name: 'score4',
      title: 'Score 4',
      type: 'string',
    }),
    defineField({
      name: 'score5',
      title: 'Score 5',
      type: 'string',
    }),
    
    ]
})

