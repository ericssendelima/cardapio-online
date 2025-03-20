// import axios from "axios";
import classes from "./home.module.css";
import { IconShoppingBag } from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
import ModalLinkPromocional from "../../components/modalLinkPromocional/ModalLinkPromocional";

//Assets
import logoWhite from "../../assets/nliras-branco.png";
import vegBackground from "../../assets/legumes-branco.png";

const Home = () => {
  // const [checked, setChecked] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  // const handleTestes = () => {
  //   axios("http://localhost:8088/api")
  //     .then((res) => {
  //       console.log("dentro do then do axios");
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className={classes.homeContainer}>
      {/* seção para colocar os legumes de fundo */}
      <div className={classes.topBackground}>
        <img
          alt="legumes-fundo"
          src={vegBackground}
          className={classes.legumesFundo}
        />
      </div>

      {/* seção para colocar a logo da aplicação */}
      <div className={classes.logoContainer}>
        <img alt="logo-white" src={logoWhite} className={classes.logoWhite} />
      </div>
      {/* Seção inferior com a frase inicial e botão */}
      <div className={classes.semiCirculo}>
        <div className={classes.semiCirculoHeader}>
          <div className={classes.topTextContainer}>
            <p className={classes.topText01}>Sem tempo para cozinhar?</p>
            <p className={classes.topText02}>Ajudamos Você</p>
          </div>
          <div className={classes.bottomTextContainer}>
            <p className={classes.bottomText}>
              Refeições saudáveis e prontas, só descongelar e saborear!
            </p>
          </div>
        </div>
        {/* Colocar o botão aqui */}
        <div className={classes.semiCirculoFooter}>
          <Button
            classNames={{
              root: classes.root,
              inner: classes.inner,
              section: classes.section,
              label: classes.label,
            }}
            rightSection={<IconShoppingBag stroke={2} />}
            onClick={open}
          >
            Vamos começar
          </Button>
          <span className={classes.spanButton}>Clique para prosseguir</span>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        transitionProps={{ transition: "fade", duration: 200 }}
        classNames={{
          header: classes.header,
          content: classes.modalRoot,
        }}
        withCloseButton={false}
      >
        <Modal.Header>
          <span>Indique seus amigos</span>
        </Modal.Header>
        <ModalLinkPromocional config={close} />
      </Modal>
    </div>
  );
};

export default Home;
