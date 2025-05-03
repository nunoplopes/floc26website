// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_PRODUCTION, // the name of MY dataset
  apiVersion: '2024-03-01', // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN in production
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);