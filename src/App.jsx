import { Post } from './components/post/Post'
import { Header } from './components/header/Header'

import styles from './app.module.css'

import './global.css'
import { Sidebar } from './components/sibebar/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
