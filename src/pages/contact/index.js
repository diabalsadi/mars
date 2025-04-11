// Packages
import React from "react";
import path from "path";
import fs from "fs";
// Components
import DesktopNavBar from "@/components/DesktopNavBar";
import MobileNavBar from "@/components/MobileNavBar";
import Head from "next/head";
// Styles
import styles from "./Contact.module.scss";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import Form from "@/components/Form";

const ContactPage = ({ header, getIntouch }) => {
    return <>
        <Head>
            <title>Contact Us</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
            <DesktopNavBar />
            <MobileNavBar />
            <LetsWorkTogether
                title={header?.title}
                description={header?.description}
                className={styles.header}
                imgSrc={header?.imgSrc} />
            <LetsWorkTogether
                title={getIntouch?.title}
                description={getIntouch?.description}
                imgSrc={getIntouch?.imgSrc}
            />
            <div className={styles.contactUs}>
                <Form className={styles.form} />
                <div className={styles.location}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17691.23926105935!2d35.88355437238305!3d32.53950057680667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76f0573efd0b%3A0xa49ded1f5dbe5871!2sMARSRobotics!5e0!3m2!1sar!2sjo!4v1744405256436!5m2!1sar!2sjo"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        allowfullscreen="true"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
            </div>
        </div>
    </>
}


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'src/data/contactPage.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData) || {};

    return {
        props: {
            ...data
        },
    };
}

export default ContactPage;