import Image from 'next/image'
import styles from './page.module.scss'

interface FieldImage {
  src: string
  alt: string
}

const images: FieldImage[] = [
  { src: "/bigimage.svg", alt: "Big field image" },
]

const Field = () => {
  return (
    <div className={styles.fieldBackground}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          priority={index === 0}
          className={`${styles.fieldImage} ${index !== 0 ? styles.hiddenMobile : ''}`}
        />
      ))}
    </div>
  )
}

export default Field

