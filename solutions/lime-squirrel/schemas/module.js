export default {
  name: "module",
  type: "document",
  title: "Module",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "completed",
      type: "boolean",
      title: "Completed"
    },
    {
      title: "Course",
      name: "course",
      type: "reference",
      to: [{type: "course"}]
    }

  ]
}
