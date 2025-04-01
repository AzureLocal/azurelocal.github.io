import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Azure Local Docs',
    Svg: require('@site/static/img/documentation-svgrepo-com.svg').default,
    description: <>Azure Local Documentation coming soon.</>,
  },
  {
    title: 'Azure Local Blogs',
    Svg: require('@site/static/img/computer-and-house-svgrepo-com.svg').default,
    description: <>Azure Local Blogs Coming soon!.</>,
  },
  {
    title: 'Azure Local Demos',
    Svg: require('@site/static/img/presentation-svgrepo-com.svg').default,
    description: <>Azure Local Demos coming soon!</>,
  },
  {
    title: 'Azure Local Training',
    Svg: require('@site/static/img/learning-school-svgrepo-com.svg').default,
    description: <>Azure Local Training coming soon!</>,
  },
  {
    title: 'Azure Local Announcements',
    Svg: require('@site/static/img/announcement-svgrepo-com.svg').default,
    description: <>Azure Local News and Updates coming soon!</>,
  },
  {
    title: 'Azure Local Events',
    Svg: require('@site/static/img/calendar-svgrepo-com.svg').default,
    description: <>Azure Local Events coming soon!</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
