import * as React from 'react';
import Strings from '../constants/Strings';
import WebpImage from './common/WebpImage';

interface SocialIconProps {
  url: string;
  iconClass: string;
}

const InfoPane = () => {
  return (
    <div id="info">
      <h2 className="info-header">{Strings.infoPane.name}</h2>
      <WebpImage
        className="info-picture bg-light"
        src="../static/img/6522_square.png.webp"
        fallback="../static/img/6522_square.png"
        alt="Jesse's Portrait"
      />

      <h6 id="traits">{Strings.infoPane.traits}</h6>

      <div className="social-icons flex flex-row">
        {Strings.infoPane.socialIcons.map((iconProps: SocialIconProps, i) => (
          <SocialIcon key={i} {...iconProps} />
        ))}
      </div>

      <footer id="info-footer">
        <p>
          <a href="https://goo.gl/maps/kMWnC4nhxyVv9uqc6" target="_blank">
            <i className="fas fa-map-marker-alt"></i>{' '}
            {Strings.infoPane.location}
          </a>
        </p>
        <span>{Strings.infoPane.copyright}</span>
      </footer>
    </div>
  );
};

const SocialIcon = ({ url, iconClass }: SocialIconProps) => {
  return (
    <div className="social-icon">
      <a href={url} target="_blank">
        <i className={iconClass}></i>
      </a>
    </div>
  );
};

export default InfoPane;
