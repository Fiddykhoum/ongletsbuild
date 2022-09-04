import React, { useState } from 'react';
import './Tabs.css';
import ESC from './esc.jpg';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    { 
      id: Math.random(),
      label: 'Profil',
      content: (
        <div>
            <h2>Noé Khoum - Bassiste </h2>
            <p>Né en 2005, il commence la basse en 2006 avec les barreaux de sont lit. En 2008, 
              alors qu'il dort dans un grand lit, il tente de récuperer les barreaux de son ancien
              lit, son père lui achète une basse short scale avec l'argent de la vente de sont petit
              lit 
            <br/>
            <br/>
            Son père etant aussi bassiste mais trop mauvais pour lui apprendre quoi que ce soit, 
            c'est sur les reseaux sociaux qu'il va apprendre tous ses plans. 
            </p>

        </div>
      )
    },
    { 
      id: Math.random(),
      label: 'Images',
      content: (
        <div>
          <img 
            className= "Basspic"
            src={ESC} 
            alt="Noé Khoum"
          />
        </div>
      )
    },
    { 
      id: Math.random(),
      label: 'Sa basse',
      content: (
        <div>
          <strong>Fender jazz bass - Marcus Miller</strong>
            <p>Réalisée en collaboration avec le célèbre bassiste slappeur, la basse Fender Marcus
              Miller Jazz Bass est basé sur une '75 Jazz Bass, mais équipée d'une électronique active
              à deux bandes et d'un chevalet Badass II. Le mode actif peut être activé et désactivé
              par un commutateur.
            </p>
            <ul> 
              <li><strong>Nombre de cordes :</strong> 4 cordes</li>
              <li><strong>Manche :</strong> érable en une seule pièce, forme en "C"</li>
              <li><strong>Touche :</strong> érable</li>
              <li><strong>Frettes :</strong> 20 frettes medium jumbo</li>
              <li><strong>Micros :</strong> 2 x Vintage Jazz Bass (simple bobinage)</li>
              <li><strong>Contrôles :</strong> 2 volumes, tonalité 1 (boost/cut des graves actif), tonalité 2 (aigus)</li>
              <li><strong>Active :</strong> oui</li>
              <li><strong>Chevalet :</strong> Leo Quan Badass II</li>
              <li><strong>Mécaniques :</strong> type vintage, inversées</li>
              <li><strong>Diapason :</strong> 34"</li>
              <li><strong>Radius :</strong> 7,25" (184 mm)</li>
              <li><strong>En vente depuis :</strong> 1998</li>
              <li><strong>Série :</strong> Artist</li>
              
            </ul>
        </div>
      )
     }
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    
    <div className="Wrapper">
      <h1>Noé Khoum - Le petit Basstard</h1>
      <ul className="Tabs">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className="Tab"
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
      <div className="ActiveTabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;