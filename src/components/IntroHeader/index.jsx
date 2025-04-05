// Packages
import cx from "classnames";
// Components
import NavBar from "../NavBar";
import LetsWorkTogether from "../LetsWorkTogether";
// Styles
import styles from "./IntroHeader.module.scss";

const InrtoHeader = ({ header }) => {
    return (
        <div
            className={cx(styles.headerContainer,
                { [styles.headerContainerImage]: !header?.imgSrc })}
            {...(header?.imgSrc && {
                style: {
                    background: `url(${header.imgSrc}) no-repeat 100% 35%`,
                },
            })}>
            {header?.videoUrl &&
                <video autoPlay loop muted className={styles.video}>
                    <source src={header.videoUrl} type="video/mp4" />
                </video>
            }
            <NavBar />
            <LetsWorkTogether
                title={header?.title}
                description={header?.description}
                className={styles.header}
            />
        </div>
    );
}

export default InrtoHeader;