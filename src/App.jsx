import { Post } from './components/post/Post'
import { Header } from './components/header/Header'

export function App() {
  return (
    <div>
      <Header />

      <Post
        title="Rodrigo Bighetti"
        content="Lorem ipsum dolar sit, amet consectetur adipisicing elit !"
      />

      <Post title="Aninha" />

      <Post title="joao" content="Dev FullStack" />
    </div>
  )
}
