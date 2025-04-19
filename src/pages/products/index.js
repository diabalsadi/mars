// Packages
import React from "react";
import path from "path";
import fs from "fs";
// Components
import CardContainer from "@/components/CardContainer";
import Head from "next/head";
import InrtoHeader from "@/components/IntroHeader";
import LetsWorkTogether from "@/components/LetsWorkTogether";
// Styles
import styles from "./ProductsPage.module.scss";


const ProductsPage = ({ header, products, letsWorkTogether }) => {

    return (
        <div>
            <Head>
                <title>Products</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <InrtoHeader
                    header={header}
                />
                <CardContainer cards={products} className={styles.productsContainer} />
                <LetsWorkTogether
                    className={styles.letsWorkTogether}
                    title={letsWorkTogether?.title}
                    imgSrc={letsWorkTogether?.imgSrc}
                    description={letsWorkTogether?.description}
                />
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'src/data/productsPage.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData) || {};

    return {
        props: {
            ...data,
        },
    };
}

export default ProductsPage;

