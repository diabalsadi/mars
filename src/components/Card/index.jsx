import Image from "next/image";
import styles from "./Card.module.scss";
import { Space_Grotesk } from 'next/font/google'
import cx from 'classnames';
import ArrowButton from "../ArrowButton";

const spaceGrotesk = Space_Grotesk({
    display: 'swap',
    subsets: ['latin'],
})

const Card = ({ title, description, image, href }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={`/${image}`} alt={title} width={340} height={280} />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={cx(styles.description, spaceGrotesk.className)}>{description}</p>
            {href && <ArrowButton text="Learn More" href={href} className={styles.learnMore}/>}
        </div>
    );
}

export default Card;