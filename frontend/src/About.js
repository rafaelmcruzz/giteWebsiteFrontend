import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  return (
    <section className="about-section"> 
      <div className="text-overlay">
        <h1>{t("aboutus")}</h1>
        <p>
          {t("aboutText")}
        </p>
      </div>
    </section>
  );
}

export default About;