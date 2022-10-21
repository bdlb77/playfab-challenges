export default {
  name: "lesson",
  type: "document",
  title: "Lesson",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "description",
      type: "string",
      title: "Description"
    },
    {
      name: "completed",
      type: "boolean",
      title: "Completed"
    },
    {
      title: "Module",
      name: "module",
      type: "reference",
      to: [{ type: "module" }]
    }
  ]
}
