import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "078kcyiw",
  dataset: "[ your preferred dataset, eg production ]",
  apiVersion: "2021-10-21",
  useCdn: false
});
