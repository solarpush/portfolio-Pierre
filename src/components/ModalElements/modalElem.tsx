import { Paper } from "@mui/material";

export function consultingModal() {
  return (
    <Paper elevation={6} sx={{ width: "35%", padding: "15px" }}>
      <h3>Comment se déroule un audit ?</h3>
      <p>Un audit informatique se fait en 3 étapes clefs</p>
      <ul>
        <li>
          La lecture des process actuels et la prise en compte des moyens sans
          intervention.
        </li>
        <li>Réflexion des solutions et structures de solutions réalisables.</li>
        <li>
          La mise en place des solutions d'automatisation et de numérisation sur
          les postes qui on le meilleur ratio gain/investissement.
        </li>
      </ul>
    </Paper>
  );
}
export function programmationModal() {
  return (
    <Paper elevation={6} sx={{ width: "35%", padding: "15px" }}>
      <h3>Quels languages, frameworks et application ?</h3>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <h4>Languages et librairies</h4>
          <ul>
            <li>React</li>
            <li>JavaScript, TypeScript</li>
            <li>FireBase, NodeJs</li>
          </ul>
        </div>
        <div>
          <h4>Applications</h4>
          <ul>
            <li>
              Des sites complets et applications web de toutes formes et toutes
              tailles.
            </li>
            <li>De la gestion de données depuis Google Cloud Plateform.</li>
            <li>Des API's exposer depuis Google Cloud Functions.</li>
            <li>Des configurations réseaux local et public.</li>
          </ul>
        </div>
      </div>
    </Paper>
  );
}
export function formationModal() {
  return (
    <Paper elevation={6} sx={{ width: "35%", padding: "15px" }}>
      <h3>Comment se déroule une formation ?</h3>
      <p>
        Les formations sont essentielles pour vos employés, il peut être
        frustrant de ne pas savoir utiliser une fonctionnalité, mais ne pas
        savoir vers qui se tourner l'est encore plus.
      </p>
      <p>
        Savoir montrer et expliquer les vrai problématiques du quotidient c'est
        avant tout écouter les besoins.
      </p>
      <ul>
        <li>
          Sauf lors de mise à jour d'un logiciel avec des features précises, les
          premières heures servent à échanger et récolter les informations qu'il
          manque au équipe.
        </li>
        <li>
          Des survols de plusieurs notions et des misent en pratiques suivent.
        </li>
        <li>
          Pour finir par un dépassement des compétences maitrisées et chaques
          sujets est approfondie un par un, au maximum 5 sujets par formations.
        </li>
      </ul>
      <p>
        Le rythme de formation doit-être continue, 1 cycle de 8 h par trimestre
        est idéal pour maintenir le niveau.
      </p>
    </Paper>
  );
}
export function crmModal() {
  return (
    <Paper elevation={6} sx={{ width: "35%", padding: "15px" }}>
      <h3>Quelles sont les fonctionnalitées implémenté ?</h3>
      <p>
        Le CRM possède un tas de fonctionnalitées, voici une liste non
        exhaustive :{" "}
      </p>
      <ul>
        <li>
          Gestion multicompte Administrateur, Responsables, Gestionnaire,
          Commercial, Poseurs.
        </li>
        <li>
          Ajout de leads via divers moyens(fichiers .csv .xlsx, via facebook
          leads, en ajout manuel).
        </li>
        <li>
          Gestions des leads via un scoreBoard qui permet de qualifier les leads
          et de garder un historique des appels.
        </li>
        <li>
          Ajout d'informations technique mis à disposition des aquipes de vente
          ( définition des produits, prix, etc)
        </li>
        <li>
          Maitrise du discours commercial via l'integration d'un book
          argumentaire.
        </li>
        <li>Formulaire client et technique complet.</li>
        <li>
          Génération des ressources produites et calcul via l'api de PVGIS
          Sahara.
        </li>
        <li>Ajout et calcul complet du financement.</li>
        <li>Génration côté client de contrat et documents personnalisables.</li>
        <li>
          Signatures à double authentification pour garantir la validitée des
          contrats via l'api Yousign.
        </li>
        <li>Suivi client simplifier grâce à l'historique des échanges.</li>
        <li>
          Gestion du SMTP et reprise en main de la réputation de son domaine
          avec MailJet.
        </li>
        <li>
          Ajout facilité et sauvegarde des photos du chantier lors de la visite
          du commercial.
        </li>
        <li>
          Génération de déclaration préalable automatique avec les infos
          clients.
        </li>
        <li>Et bien d'autres...</li>
      </ul>
    </Paper>
  );
}
export function blindTestModal() {
  return (
    <Paper elevation={6} sx={{ width: "35%", padding: "15px" }}>
      <h3>Comment ça marche ?</h3>
      <p>
        Un blind test, c'est des disputes pour savoir qui à voter le premier et
        de la gêne pour certains qui n'osent pas crier et lever les bras !
      </p>
      <p>Avec BlindTestMe c'est très simple il y a 5 étapes</p>
      <ul>
        <li>Creer un compte entreprise.</li>
        <li>
          Imprimer les flyers générer automatiquement avec le code Qr de
          connexion à son compte entreprise.
        </li>
        <li>Connecter un compte Spotify Premium et lancer la playlist.</li>
        <li>Lancer la partie quand les clients son connectés.</li>
      </ul>
    </Paper>
  );
}
