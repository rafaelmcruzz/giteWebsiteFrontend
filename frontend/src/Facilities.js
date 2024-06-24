import React from 'react';
import { FaCouch, FaUtensils, FaBed, FaBath, FaSwimmingPool, FaTshirt, FaWifi, FaLanguage } from 'react-icons/fa';
import './Facilities.css';
import { useTranslation } from 'react-i18next';

function FacilityItem({ title, items, icon: Icon }) {

  const { t } = useTranslation();

  return (
    <div className="facility-item">
      <Icon /> 
      <h3>{t(title)}</h3>
      <hr className="facility-divider" />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{t(item)}</li>
        ))}
      </ul>
    </div>
  );
}

function Facilities() {

  const { t } = useTranslation();
  
  const facilitiesData = [
    { title: 'Kitchen', items: ['Coffee Machine', 'Refrigerator', 'Oven and Stovetop', 'Toaster', 'Electric kettle', 'Dishwasher', 'Microwave'], icon: FaUtensils }, 
    { title: 'Living Room', items: ['Seating Area', 'Dining Area', 'Fireplace', 'Flat-screen TV', 'TV channels', 'CD/DVD Player', 'Board games'], icon: FaCouch },
    { title: 'Bedrooms', items: ['Queen-size Bed', 'Wardrobe', 'Linen', 'Nightstand', 'Socket near the bed', 'Clothing rack', 'Iron'], icon: FaBed },
    { title: 'Bathroom', items: ['Shower', 'Bathtub', 'Toilet', 'Sink', 'Towels', 'Free toiletries', 'Hairdryer'], icon: FaBath },
    { title: 'Laundry', items: ['Washer', 'Dryer', 'Ironing Board', 'Laundry Detergent', 'Cleaning Products'], icon: FaTshirt }, 
    { title: 'Outdoor', items: ['Garden and Picnic Area', 'Outdoor furniture and dining area', 'Sun terrace with BBQ Grill', 'Private swimming pool', 'Sun umbrellas and loungers'], icon: FaSwimmingPool },
    { title: 'Other', items: ['Free Wi-Fi', 'Free parking', 'Pet-friendly', 'Heating', 'Non-smoking rooms'], icon: FaWifi },
    { title: 'Languages', items: ['English', 'Spanish', 'Portuguese', 'French'], icon: FaLanguage },
  ];

  return (
    <section className="facilities-section">
      <h2 className="facilities-title">{t('facilitiesTitle')}</h2>
      <div className="facilities-grid">
        {facilitiesData.map((facility, index) => (
          <FacilityItem key={index} {...facility} />
        ))}
      </div>
    </section>
  );
}

export default Facilities;
