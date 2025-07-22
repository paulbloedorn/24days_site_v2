import { useTina } from "tinacms/dist/react"
import { client } from "tina/__generated__/client"

interface PagesData {
  pages: {
    hero: {
      title: string
      description: string
      buttonText: string
    }
  }
}

export default function HomePage(props: {
  data: PagesData
  query: string
  variables: {
    relativePath: string
  }
}) {
  const { data } = useTina<PagesData>(props)

  // ✅ access the data using 'pages' instead of 'homeJson'
  const home = data.pages

  return (
    <main>
      <h1>{home.hero.title}</h1>
      <p>{home.hero.description}</p>
      <button>{home.hero.buttonText}</button>
    </main>
  )
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pages({
    relativePath: "home.json",
  })

  return {
    props: tinaProps,
  }
}
