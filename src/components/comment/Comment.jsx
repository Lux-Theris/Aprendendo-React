import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxryT9TmdfamTFzTYgIrzBIYfGJGrUwOV-RPt3YyhjJw&s" />
      <div className={styles.contentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Angela Ziegler</strong>
              <time title="24 de Outubro de 3025" dateTime="3025-10-24">
                Em mil anos
              </time>
            </div>
            <button title="Excluir Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Heróis nunca morrem! Por um preço &#128520;</p>
        </div>
        <footer>
          <button>
            <ThumbsUp></ThumbsUp>
            Like
            <span>36</span>
          </button>
          <button>
            <ThumbsDown></ThumbsDown>
            Dislike
            <span>1</span>
          </button>
          <button>Responder</button>
        </footer>
      </div>
    </div>
  )
}
