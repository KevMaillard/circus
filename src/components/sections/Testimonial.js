import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Séances',
    paragraph: "Dans un fabuleux chapiteau de 2500 places en fauteuils individuels, parqueté et très bien chauffé. Un chapiteau d'accueil de plus de 600m² avec les toilettes à l'intérieur. Stands Pop Corns, Crêpes, Barbes à papa, Bonbons, Confiseries, Bar etc..."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    - Séance de 9h15 <br />
                    - Séance de 13h45 <br />
                    - Séance de 20h00 <br />                      </p>
                </div>
                <div>
                  <span className="testimonial-item-name text-color-high">Vendredi 22 octobre 2021</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    - Séance de 13h25 <br />
                    - Séance de 15h55 <br />
                    - Séance de 18h25 <br /> 
                    - Séance de 20h55 <br /> 
                      </p>
                </div>
                <div >
                  <span className="testimonial-item-name text-color-high">Samedi 23 octobre 2021</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    - Séance de 10h45 <br />
                    - Séance de 13h45 <br />
                    - Séance de 16h15 <br /> 
                    - Séance de 18h45 <br /> 
                      </p>
                </div>
                <div >
                  <span className="testimonial-item-name text-color-high">Dimanche 23 octobre 2021</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;