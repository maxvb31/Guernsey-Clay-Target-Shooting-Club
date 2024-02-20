import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'row1Date',
      title: 'Row 1 Date',
      type: 'string',
    }),
    defineField({
      name: 'row1Range1',
      title: 'Row 1 Range 1',
      type: 'string',
    }),
    defineField({
      name: 'row1Range2',
      title: 'Row 1 Range 2',
      type: 'string',
    }),
    defineField({
      name: 'row1Range3',
      title: 'Row 1 Range 3',
      type: 'string',
    }),
    defineField({
      name: 'row2Date',
      title: 'Row 2 Date',
      type: 'string',
    }),
    defineField({
      name: 'row2Range1',
      title: 'Row 2 Range 1',
      type: 'string',
    }),
    defineField({
      name: 'row2Range2',
      title: 'Row 2 Range 2',
      type: 'string',
    }),
    defineField({
      name: 'row2Range3',
      title: 'Row 2 Range 3',
      type: 'string',
    }),
    defineField({
      name: 'row3Date',
      title: 'Row 3 Date',
      type: 'string',
    }),
    defineField({
      name: 'row3Range1',
      title: 'Row 3 Range 1',
      type: 'string',
    }),
    defineField({
      name: 'row3Range2',
      title: 'Row 3 Range 2',
      type: 'string',
    }),
    defineField({
      name: 'row3Range3',
      title: 'Row 3 Range 3',
      type: 'string',
    }),
    defineField({
      name: 'resultRow1Date',
      title: 'Results Row 1 Date',
      type: 'string',
    }),
    defineField({
      name: 'resultRow1Discipline1',
      title: 'Results Row 1 Discipline 1',
      type: 'string',
    }),
    defineField({
      name: 'resultRow1Discipline2',
      title: 'Results Row 1 Discipline 2',
      type: 'string',
    }),
    defineField({
      name: 'resultRow2Date',
      title: 'Results Row 2 Date',
      type: 'string',
    }),
    defineField({
      name: 'resultRow2Discipline1',
      title: 'Results Row 2 Discipline 1',
      type: 'string',
    }),
    defineField({
      name: 'resultRow2Discipline2',
      title: 'Results Row 2 Discipline 2',
      type: 'string',
    }),
    defineField({
      name: 'resultRow3Date',
      title: 'Results Row 3 Date',
      type: 'string',
    }),
    defineField({
      name: 'resultRow3Discipline1',
      title: 'Results Row 3 Discipline 1',
      type: 'string',
    }),
    defineField({
      name: 'resultRow3Discipline2',
      title: 'Results Row 3 Discipline 2',
      type: 'string',
    }),
    defineField({
      name: 'resultRow4Date',
      title: 'Results Row 4 Date',
      type: 'string',
    }),
    defineField({
      name: 'resultRow4Discipline1',
      title: 'Results Row 4 Discipline 1',
      type: 'string',
    }),
    defineField({
      name: 'resultRow4Discipline2',
      title: 'Results Row 4 Discipline 2',
      type: 'string',
    }),
    
  ],
});
