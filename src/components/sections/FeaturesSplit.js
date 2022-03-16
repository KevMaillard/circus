import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Programmation',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ukraine 
                  </div>

                <h3 className="mt-0 mb-12">
                  TRIO PRIME
                  </h3>
                <p className="m-0">
                  Un numéro d'équilibre différent et exclusivement féminin. Comme dans tous les programmes de haut niveau, il faut un moment de poésie. Ici pas de muscles ni de forces, mais bien des positions créatives et complexes réalisées avec grâce et élégance par trois jeunes filles Ukrainienes. Un moment innovant de charme et de finesse au cours de ce spectacle aux multiples surprises.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/trapeze ukraine.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  République Tchèque
                  </div>
                <h3 className="mt-0 mb-12">
                  ROBI BEROUZEK
                  </h3>
                <p className="m-0">
                  Invité au festival international du cirque de Monte-Carlo, cela en  dit long sur la qualité de son numéro. Cet artiste conformé présente une prestation exceptionnelle et étonnante sur plusieurs échelles...libres! Là encore, l'équilibre doit être optimal...
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/robi.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  République Tchèque
                  </div>
                <h3 className="mt-0 mb-12">
                  ANTON NAVRATIL
                  </h3>
                <p className="m-0">
                  Numéro impressionnant au trapèze Washigton avec équilibres sur la tête et sur chaises sur la seule barre de quelques centimètres de ce même trapèze. Le tout à la coupole du chapiteau. Ce numéro demande une maitrise de l'équilibre et une concentration extrème. Il a reçu la médaille de Bronze au Festival du Cirque de Prague en 2020
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/acrobate.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Canada
                  </div>
                <h3 className="mt-0 mb-12">
                  CATWALL
                  </h3>
                <p className="m-0">
                  Nous sommes très fiers de poulvoir vous présenter ce numéro de trampoline à 360° et quij n'a rien à voir avec les numéros de trampoline déja vus. Cinq artistes canadiens arrivent de la prestigieuse école du cirque de Montréal. Clown de bronze au festival de Monte-Carlo, ce numéro extraordinaire est composé d'exercices et sauts périlleux exceptionnels rattrapés au sommet d'un véritable mur de 4,5m de haut. Il faut le voir pour le croire !
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/circus2.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Suisse
                  </div>
                <h3 className="mt-0 mb-12">
                  ORCHESTRE
                  </h3>
                <p className="m-0">
                  Passé par le festival du Cirque de Monte-Carlo, le chef d'orchestre Tino Aeby a exactement le tempérament requis pour animer un vrai spectacle de cirque de très haut niveau
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/circus3.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Suisse
                  </div>
                <h3 className="mt-0 mb-12">
                  LE CAROUSSEL DE LOUIS
                  </h3>
                <p className="m-0">
                  Carroussel équestre et chevaux en liberté, cette famille Suisse s'est vue attribuer en 2019, le prix piste d'Or au festival de Massy. En 5 participations festival international de Monte-Carlo, elle a raflé 3 clowns d'Or et 2 clowns d'Argent. Dans cette dicipline légendaire, il vous sera proposé un show des plus spectaculaires avec "très rare" des chevaux qui pivotent sur eux-même.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/horse.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;