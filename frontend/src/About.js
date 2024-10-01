import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  const aboutText = t("aboutText");

  return (
    <section className="about-section"> 
      <div className="text-overlay">
        <h1>{t("aboutus")}</h1>
        {aboutText.split('\n\n').map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
            {index < aboutText.split('\n\n').length - 1 && <hr className="separator" />}
      </div>
      ))}
     </div>
    </section>
  );
}

export default About;