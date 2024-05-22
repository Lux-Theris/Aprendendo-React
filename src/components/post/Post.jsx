import { Comment } from '../comment/Comment'
import styles from './post.module.css'
import { useState } from 'react'

export function Post() {
  const [InputValue, setInputValue] = useState('')
  const handleSubmit = (data) => {
    alert(data.target.value)
  }
  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.imgAuthor}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png"
            alt="NaN"
          />
          <div className={styles.authorInfo}>
            <strong>OverWatch</strong>
            <span>Free to Play Game</span>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <p>O mundo precisa de heróis</p>
        <p>Venha se tornar um herói hoje mesmo. Junte-se a overwatch</p>
        <p className={styles.link}>
          <a href="https://overwatch.blizzard.com/pt-br/">Jogue já</a>
        </p>
        <p>
          <img
            className={styles.imgPost}
            src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt030bf3d606661d3c/633f5be164fe5a7d4481a16c/overwatch-section1-feature1.png"
            alt=""
          />
        </p>
      </div>
      <time title="14 de maio de 2024" dateTime="2024-05-14 08:00:00">
        Publicado há 8 horas
      </time>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <div>
          <img
            className={styles.imgAuthor}
            src="https://github.com/Lux-Theris.png"
            alt="NaN"
          />
        </div>
        <div className={styles.comment}>
          <textarea
            placeholder="Deixe seu comentário"
            value={InputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></textarea>
          <footer>
            <button type="submit"> Publicar</button>
          </footer>
        </div>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
