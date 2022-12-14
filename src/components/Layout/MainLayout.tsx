import { Avatar, Box } from "@mui/material";
import { NextPage } from "next";
import NextLink from "next/link";

import Head from "next/head";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import styles from "../../../styles/Home.module.css";
import { DrawerNavigation } from "../ui/DrawerNavigation";
import { NavigationBreadcrumbs } from "../ui/NavigationBreadcrumbs";

interface Props {
    title?: string;
    showNavigation?: boolean;
}

const MainLayout: FC<PropsWithChildren<Props>> = ({
    children,
    title = "A Duras Penas",
    showNavigation = true,
}) => {
    return (
        <div>
            <Head>
                <title>{`ADP - ${title}`}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />

                <meta name="A Duras Penas Web" content="Sitio Oficial de ADP" />
                <meta property="og:site_name" content="A Duras Penas Web" />
                <meta property="og:image" content={"/images/nuevo_logo.png"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                style={{
                    marginTop: "0",
                    marginLeft: "0",
                    position: "sticky",
                    top: "0",
                    zIndex: 2,
                }}
            >
                <DrawerNavigation />
            </Box>

            <div className={styles.container}>
                {showNavigation && <NavigationBreadcrumbs />}

                <main className={styles.main}>{children}</main>

                <footer className={styles.footer}>
                    <a
                        href="https://www.youtube.com/@Aduraspenaswwe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {`Powered by → ADP Holding`}
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;
