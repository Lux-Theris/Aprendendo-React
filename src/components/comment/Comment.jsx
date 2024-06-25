import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Comment(props) {
  const { comment, deleteComment } = props
  const publishedAtFormated = format(
    comment.createdAt,
    "d 'de' LLLL 'de' yyy",
    {
      locale: ptBR,
    },
  )
  const DistanceToNowFormated = formatDistanceToNow(comment.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <div className={styles.comment}>
      <Avatar src={comment.avatarurl} />
      <div className={styles.contentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.name}</strong>
              <time title={publishedAtFormated}>{DistanceToNowFormated}</time>
            </div>
            <button
              title="Excluir Comentário"
              onClick={() => deleteComment(comment)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.comment}</p>
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
