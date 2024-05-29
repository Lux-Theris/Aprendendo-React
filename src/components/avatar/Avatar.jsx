import styles from './avatar.module.css'
export function Avatar({ src, hasborder = false }) {
  return (
    <img
      className={hasborder ? styles.avatar : styles.avatarwithoutborder}
      src={src}
      alt="NaN"
    />
  )
}
