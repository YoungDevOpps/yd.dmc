"use client"; // si Next.js 13+ avec App router

import { useState } from "react";

type Activity = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  items: Activity[];
};

export const activities: Activity[] = [
  {
    title: "Étude avant-projet",
    content: (
      <>
        <p>Notre bureau d’études assure :</p>
        <ul>
          <li>La Rédaction des cahiers des clauses techniques particulières</li>
          <li>La Conception des plans et schémas électriques</li>
          <li>
            Le Dimensionnement d’armoires électriques basse tension et
            d’automatisme
          </li>
          <li>
            Le Dimensionnement complet d’une installation des postes jusqu’aux
            tableaux divisionnaires.
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "Installations Industrielle, Tertiaire et Domestique : HT/BT - Tableaux et Armoire Divisionnaire",
    content: (
      <ul>
        <li>Installation de Poste de transformation HT/BT</li>
        <li>Installation de TGBT et tableau divisionnaire</li>
        <li>Câblage et raccordement d’armoire process et équipement process</li>
        <li>Réhabilitation d’armoire de commande</li>
        <li>Réhabilitation d’armoire et d’installation électrique</li>
      </ul>
    ),
  },
  {
    title: "Automatisation, Supervision et Installation informatique",
    content: (
      <>
        <p>
          Nous faisons l’automatisation des chaînes de production industrielle …
        </p>
        <ul>
          <li>PC vue adapté à plusieurs fabricants d’automate</li>
          <li>Vijeocitect pour automate Schneider Electric</li>
          <li>Wincc pour automate Siemens</li>
        </ul>
      </>
    ),
  },
  {
    title: "Risques Industriels",
    content: (
      <ul>
        <li>Signalisation Horizontale et verticale</li>
        <li>
          Revêtements spéciaux (sablage, traitement anticorrosion, application
          de résine époxy)
        </li>
        <li>
          Sécurité incendie : Étude, Fourniture et Installation de Robinet
          d’Incendie Armé
        </li>
        <li>Extincteur, détection incendie, Extinction Automatique à Gaz</li>
      </ul>
    ),
  },
  {
    title: "S.A.V (Service Après-Vente)",
    content: (
      <p>
        Nous entretenons notre clientèle en leur garantissant une intervention
        prompte …
      </p>
    ),
  },
  {
    title: "Vente de Matériels IFM Electronic",
    content: (
      <>
        <p>
          Nous sommes représentant de la marque IFM Electronic en Côte d’Ivoire
          … à savoir :
        </p>
        <ul>
          <li>Détecteurs de position et reconnaissance d’objets : …</li>
          <li>Détecteurs inductifs, capacitifs, magnétiques</li>
          <li>Cellules Optoélectroniques</li>
          <li>Visions 2D et 3D</li>
          <li>…</li>
        </ul>
      </>
    ),
  },
];

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border rounded">
          <button
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleIndex(idx)}
          >
            <span className="font-semibold">{item.title}</span>
            <span className="float-right">
              {openIndex === idx ? "➖" : "➕"}
            </span>
          </button>
          <div
            className={`p-4 transition-max-h duration-300 ease-in-out overflow-hidden ${
              openIndex === idx ? "max-h-screen" : "max-h-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
