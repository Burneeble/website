"use client";

import { Button, Label, useClientInfoService } from "@burneeble/ui-components";
import { HeroProps } from "./Hero.types";
import { Canvas } from "@react-three/fiber";
import { HeroCanvas } from "./components";
import * as THREE from "three";
import { Suspense } from "react";

const Hero = (props: HeroProps) => {
	//States
	const labels = [
		"#Ethereum",
		"#Ecommerce",
		"#DApp",
		"#AWS",
		"#Shopify",
		"#Web3",
		"#Blockchain",
	];

	//Hooks
	const { screen, width } = useClientInfoService();
	//Methods
	const getLabelSize = () => {
		switch (screen) {
			case "sm":
				return "sm";
			case "md":
				return "default";
			case "lg":
			case "xl":
			case "2xl":
				return "lg";
		}
	};

	return (
		<>
			<section
				id={"hero"}
				className={`
      hero cs-section-structure cs-gap-between-content tw-relative tw-flex
      tw-flex-col tw-justify-start tw-pt-[134px]

      lg:tw-pt-[221px]

      xl:tw-justify-center xl:tw-pt-[86px]
    `}
			>
				<div
					className={`
       hero-shape tw-absolute tw-left-1/2 tw-top-1/2 tw-h-[40rem] tw-w-[80rem]
       -tw-translate-x-[50%] -tw-translate-y-[50%] tw-rotate-[30deg]
       tw-bg-[radial-gradient(_rgba(80,80,80,1)_10%,_#000_80%)] tw-opacity-[.5]
       tw-blur-[100px]
     `}
				></div>

				<div
					className={`
       cs-gap-between-content tw-z-[2] tw-flex tw-flex-col

       lg:tw-w-[700px]
     `}
				>
					<h1 className={`title tw-z-[2]`}>
						Build and grow your project with{" "}
						<span className="gradient-text">BURNEEBLE</span>.<br />
						<span className="gradient-text">No limits</span>, in every platform
						and space.
					</h1>
					<div
						className={`
        labels tw-relative tw-z-[2] tw-flex tw-flex-wrap tw-gap-[13px]

        md:tw-gap-5
      `}
					>
						{labels.map((label, i) => (
							<Label
								variant={"default"}
								key={i}
								text={label}
								size={getLabelSize()}
							/>
						))}
					</div>
					<Button
						size={screen === "sm" || screen === "md" ? "default" : "lg"}
						fit="inline"
						onClick={() => {
							window.location.href = "mailto:contact@burneeble.com";
						}}
					>
						Start Building
					</Button>
					{width && width < 992 && (
						<Suspense>
							<Canvas
								gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
								style={{
									height: "80vh",
									width: "100%",
									position: "absolute",
									bottom: "0",
									left: "50%",
									transform: "translateX(-50%)",
									zIndex: "-1",
								}}
							>
								<HeroCanvas />
							</Canvas>
						</Suspense>
					)}
				</div>
			</section>
			{width && width >= 992 && (
				<Suspense>
					<Canvas
						gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
						style={{
							height: "100vh",
							width: "50%",
							position: "absolute",
							zIndex: "1",
							right: "0",
							top: "0",
						}}
					>
						<HeroCanvas />
					</Canvas>
				</Suspense>
			)}
		</>
	);
};

export default Hero;
