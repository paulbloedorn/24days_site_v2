import tinaGetStaticProps from 'tinacms'
import { useTina } from 'tinacms/dist/react'
import { client } from '../tina/__generated__/client'
// Update the import path to match the actual generated queries file location
// Update the import path to match the actual generated queries file location
// import { PagesDocument } from '../tina/__generated__/queries'
import { PagesDocument } from '../tina/__generated__/types' // or update to the correct path where PagesDocument is exported
import type { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const tinaProps = await client.request(
    {
      query: PagesDocument,
      variables: { relativePath: 'home.json' },
    },
    {} // empty options object
  )

  return {
    props: tinaProps,
  }
}

type HeroData = {
  hero: {
    title: string
    description: string
    buttonText: string
  }
}

export default function HomePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useTina({
    ...props,
    variables: { relativePath: 'home.json' }
  }) as { data: HeroData }

  return (
    <main>
      <h1>{data.hero.title}</h1>
      <p>{data.hero.description}</p>
      <button type="button">{data.hero.buttonText}</button>
    </main>
  )
}

