import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'dx7ldoi3',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skV5T3SpN8kG4SssW4fESW8SrrLPgxIc79cVA989FpPW8ctSB8QUASiwM33xGkEYC55OCfddPdqiU0j3DsuoFfC1ngPQi8Ar5ja0HQ9fyl0QLd7MCIPOiSCLHwq0GnywXdEckY6aDKqBYzpAQST4lU2mKsnHJYw4uDDH1ECQXFuGJUdjOiaK',
  useCdn: false,
})
