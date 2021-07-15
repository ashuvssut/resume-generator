import React from "react";
import MetaComponent from "../../seo/MetaComponent";
import metaData from "../../seo/metaData";
import styles from "./home.module.scss";

import { stylesheet as ss } from "./styles";
import Resume from "./Resume";

function Home() {
	return (
		<div className={styles.root}>
			<MetaComponent
				title={metaData.home.title}
				description={metaData.home.description}
				keywords={metaData.home.keywords}
			/>
			<div id="resume-wrap" className={styles.pageWrap}>
				<html lang="en">
					<head>
						<link
							href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,600;0,800;1,200&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap"
							rel="stylesheet"
						/>
						<style>
							{`* { margin: 0; padding: 0; box-sizing: border-box;}`}
						</style>
					</head>
					<body style={ss.htmlBody}>
						<div style={ss.page}>
							<div style={ss.content}>
								<Resume />
							</div>
						</div>
					</body>
				</html>
			</div>
		</div>
	);
}

export default Home;
