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
  const [comments, setComments] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    setComments([
      ...comments,
      {
        name: 'Angela Ziegler',
        avatarurl: '',
        comment: InputValue,
        createdAt: new Date(),
      },
    ])
    setInputValue('')
  }

  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const deleteComment = (commentToBeDeleted) => {
    const filteredComments = comments.filter((comment) => {
      if (comment !== commentToBeDeleted) return comment
    })
    setComments(filteredComments)
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
                <a href={line.url}>{line.content}</a>
              </p>
            )
          } else if (line.type === 'img') {
            return (
              <img
                key={Math.random()}
                className={styles.imgPost}
                src={line.url}
                alt=""
              />
            )
          }
        })}
      </div>
      <time title={publishedAtFormated} dateTime={publishedAtFormated}>
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
            onChange={getInputValue}
          ></textarea>
          <footer>
            <button type="submit"> Publicar</button>
          </footer>
        </div>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={Math.random()}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
