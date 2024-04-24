import styles from './post.module.css'

export function Post({ title, content }) {
  return (
    <div className={styles.container}>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  )
}
