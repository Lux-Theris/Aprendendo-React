/* eslint-disable array-callback-return */
import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import styles from './post.module.css'
import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post(props) {
  const { author, content, publishedAt } = props
  const publishedAtFormated = format(publishedAt, "d 'de' LLLL 'de' yyy", {
    locale: ptBR,
  })
  const DistanceToNowFormated = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  const [InputValue, setInputValue] = useState('')
  const handleSubmit = (data) => {
    alert(data.target.value)
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarurl} hasborder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={Math.random()}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={Math.random()}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
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
      <time title={publishedAtFormated} dateTime="2024-05-14 08:00:00">
        {DistanceToNowFormated}
      </time>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <div>
          <Avatar src="https://github.com/Lux-Theris.png" />
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
      </div>
    </article>
  )
}
