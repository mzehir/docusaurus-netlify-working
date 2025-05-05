import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  subTitle: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Yıllık Tecrübe",
    subTitle: "25+",
    Svg: require("@site/static/img/experience.svg").default,
  },
  {
    title: "Kullanıcı",
    subTitle: "1600+",
    Svg: require("@site/static/img/users.svg").default,
  },
  {
    title: "Proje",
    subTitle: "250+",
    Svg: require("@site/static/img/project.svg").default,
  },
  {
    title: "Üretim Tesisi",
    subTitle: "70+",
    Svg: require("@site/static/img/facility.svg").default,
  },
];

function Feature({ title, subTitle, Svg }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className={styles.card}>
        <div className="text--center">
          <div className={styles.iconFrame}>
            <Svg className={styles.featureSvg} role="img" />
          </div>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h2">{subTitle}</Heading>
          <Heading as="h5">{title}</Heading>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
