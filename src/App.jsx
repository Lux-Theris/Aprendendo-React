import { Post } from './components/post/Post'
import { Header } from './components/header/Header'

import styles from './app.module.css'

import './global.css'
import { Sidebar } from './components/sibebar/Sidebar'

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarurl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png',
        name: 'OverWatch',
        role: 'Free to Play',
      },
      publishedAt: new Date('3024-05-10 20:00:00'),
      content: [
        {
          type: 'paragraph',
          content: 'O mundo precisa de heróis',
        },
        {
          type: 'paragraph',
          content: 'Venha se tornar um herói hoje mesmo. Junte-se a overwatch',
        },
        {
          type: 'link',
          url: 'https://overwatch.blizzard.com/pt-br/',
          content: 'Jogue Já',
        },
        {
          type: 'img',
          url: 'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt030bf3d606661d3c/633f5be164fe5a7d4481a16c/overwatch-section1-feature1.png',
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarurl: 's',
        name: '',
        role: '',
      },
      publishedAt: new Date(),
      content: [
        {
          type: 'paragraph',
          content: 'O mundo precisa de heróis',
        },
        {
          type: 'paragraph',
          content: 'Venha se tornar um herói hoje mesmo. Junte-se a overwatch',
        },
        {
          type: 'link',
          content: 'Jogue Já',
        },
      ],
    },
  ]
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
