import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "078kcyiw",
  dataset: "playfab-challenges",
  apiVersion: "2021-10-21",
  useCdn: false
});
