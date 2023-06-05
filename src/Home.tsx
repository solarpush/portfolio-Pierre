import React, { useEffect, useState } from "react";
import Toolbar from "./components//toolbar/Toolbar";
import { Tabs, Tab, Modal } from "@mui/material";

import { valueProps } from "./App";
import ChooseCard from "./components/ChooseCard/ChooseCard";
import {
  blindTestModal,
  consultingModal,
  crmModal,
  formationModal,
  programmationModal,
} from "./components/ModalElements/modalElem";
export interface PropsCard {
  valueLeft?: number;
  valueRight?: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenModal: (type: string) => void;
  places: "left" | "right";
  setModalContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}
function Home(props: valueProps) {
  const [valueLeft, setValueLeft] = useState(0);
  const [valueRight, setValueRight] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
  const [currentTimeOut, setCurrentTimeOut] = useState<number>(0);
  const [currentIntervalLeft, setCurrentIntervalLeft] = useState<number>(0);
  const [currentIntervalRight, setCurrentIntervalRight] = useState<number>(0);

  const tabChangeLeft = (_: React.SyntheticEvent, value: number) => {
    setValueLeft(value);
    if (currentIntervalLeft !== 0) {
      clearInterval(currentIntervalLeft);
      setCurrentIntervalLeft(0);
    }
  };
  const tabChangeRight = (_: React.SyntheticEvent, value: number) => {
    setValueRight(value);
    if (currentIntervalRight !== 0) {
      clearInterval(currentIntervalRight);
      setCurrentIntervalRight(0);
    }
  };

  function giveMeNumber(max: number): number {
    const random = Math.round(Math.random() * max);
    return random;
  }
  useEffect(() => {
    if (
      currentTimeOut !== 0 ||
      currentIntervalLeft !== 0 ||
      currentIntervalRight !== 0
    ) {
      return;
    }
    const timeOutLeftAndRight = setTimeout(() => {
      const intervalRight = setInterval(() => {
        setValueRight(giveMeNumber(1));
        console.log(valueRight);
      }, 3500);
      const intervalLeft = setInterval(() => {
        setValueLeft(giveMeNumber(2));
        setCurrentIntervalLeft(intervalLeft);
        setCurrentIntervalRight(intervalRight);
      }, 4500);
    }, 6000);
    setCurrentTimeOut(timeOutLeftAndRight);
    return () => {
      if (currentIntervalRight !== 0 || currentIntervalLeft !== 0) {
        clearInterval(currentIntervalRight);
        clearInterval(currentIntervalLeft);
      }
      if (currentTimeOut !== 0) {
        clearTimeout(currentTimeOut);
      }
    };
  }, [tabChangeLeft, tabChangeRight]);

  const handleOpenModal = (type: string) => {
    if (type === "consulting") {
      setModalContent(consultingModal);
      setOpenModal(true);
    } else if (type === "programmation") {
      setModalContent(programmationModal);
      setOpenModal(true);
    } else if (type === "formation") {
      setModalContent(formationModal);
      setOpenModal(true);
    } else if (type === "crm") {
      setModalContent(crmModal);
      setOpenModal(true);
    } else if (type === "blindTest") {
      setModalContent(blindTestModal);
      setOpenModal(true);
    }
  };
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Modal className="modalHome" open={openModal} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
      <div className="header">
        <div className="title">
          <h1>Pierre Nicolas</h1>
          <h1>Pierre Nicolas</h1>
        </div>
        <h2>Portfolio</h2>
      </div>
      <div className="body">
        <div className="left">
          <h3>Compétences</h3>
          <Tabs
            textColor="inherit"
            value={valueLeft}
            onChange={tabChangeLeft}
            centered
          >
            <Tab label="Audit" />
            <Tab label="Programmation" />
            <Tab label="Formation" />
          </Tabs>
          <ChooseCard
            setOpenModal={setOpenModal}
            handleOpenModal={handleOpenModal}
            valueLeft={valueLeft}
            places={"left"}
            setModalContent={setModalContent}
          />
        </div>
        <div className="right">
          <h3>Projets</h3>
          <Tabs
            textColor="inherit"
            value={valueRight}
            onChange={tabChangeRight}
            centered
          >
            <Tab label="CRM spécialisé" />
            <Tab label="Blind Test Automatisé" />
          </Tabs>
          <ChooseCard
            setOpenModal={setOpenModal}
            handleOpenModal={handleOpenModal}
            valueRight={valueRight}
            places={"right"}
            setModalContent={setModalContent}
          />
        </div>
      </div>
      <div className="footer">
        <Toolbar value={props.value} setValue={props.setValue} />
      </div>
    </>
  );
}

export default Home;
