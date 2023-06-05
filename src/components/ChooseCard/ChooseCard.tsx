import MyCard from "../Cards/MyCard";
import consulting from "../../assets/consulting.webp";
import snippetJs from "../../assets/snippetJs.webp";
import formation from "../../assets/formation.webp";
import softify from "../../assets/softify.webp";
import blindtestme from "../../assets/blindtestme.webp";

import { PropsCard } from "../../Home";

function ChooseCard(props: PropsCard) {
  return (
    <>
      {props.places === "left" ? (
        <>
          {props.valueLeft === 0 ? (
            <MyCard
              title="Consultant informatique"
              image={{
                src: consulting,
                title: "Consultant",
              }}
              body="Un vaste domaine pour beaucoup compliqué à assimiler, les sociétés doivent pourtant se numérisé intélligement et automatiser les processus redondant pour rester compétitive."
              action={{
                function: props.handleOpenModal,
                text: "Comment se déroule un audit ?",
                type: "consulting",
              }}
            />
          ) : props.valueLeft === 1 ? (
            <MyCard
              title="Programmation"
              image={{
                src: snippetJs,
                title: "Snippet JS",
              }}
              body="Spécialisé dans les technologies Web, je suis en mesure de vous accompagner sur la création de site vitrine ou d'application web réactive incluant toutes les logiques métiers complexe et les services serveur via firebase."
              action={{
                function: props.handleOpenModal,
                text: "Quels languages, frameworks et application ?",
                type: "programmation",
              }}
            />
          ) : (
            props.valueLeft === 2 && (
              <MyCard
                title="Formation"
                image={{
                  src: formation,
                  title: "Formation de personnel",
                }}
                body="Tous les sujets sont enviseageables, de l'utilisation de logiciel Web fourni, à l'apprentissage de la suite office en passant par des logiels graphique ou comptable."
                action={{
                  function: props.handleOpenModal,
                  text: "Comment se passe une formation ?",
                  type: "formation",
                }}
              />
            )
          )}
        </>
      ) : (
        props.places === "right" && (
          <>
            {props.valueRight === 0 ? (
              <MyCard
                title="CRM complet pour les entreprises de rénovation de l'habitat"
                image={{
                  src: softify,
                  title: "CRM",
                }}
                body="Ce projet représente un ensemble de fonctionnalitées variées, aussi bien de la gestion de base de donnée à gros volume que de la génération de .PDF personnalisable en passant par la maitrise de son environnement SMTP et la gestion des rôles et du multiCompte."
                action={{
                  function: props.handleOpenModal,
                  text: "Quelles sont les fonctionnalitées implémenté ?",
                  type: "crm",
                }}
              />
            ) : (
              props.valueRight === 1 && (
                <MyCard
                  title="Blind Test de groupe"
                  image={{
                    src: blindtestme,
                    title: "Snippet JS",
                  }}
                  body="C'est un Blind Test qui permet au professionnels de fidéliser leur clientels via une activitée ludique et rendu discrète par l'utilisation d'un buzzer par table ou par personne, un classement est réalisé à chaque partie et les temps sont comptabilisés à chaque manches."
                  action={{
                    function: props.handleOpenModal,
                    text: "Comment ça marche ?",
                    type: "blindTest",
                  }}
                />
              )
            )}
          </>
        )
      )}
    </>
  );
}

export default ChooseCard;
