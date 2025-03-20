import classes from "./modalLinkPromocional.module.css";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router";

import saving from "../../assets/saving.png";

const ModalLinkPromocional = ({ config }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.modalContainer}>
      <Button
        onClick={() => {
          console.log("teste");
          navigate("/cardapio");
        }}
      >
        Teste
      </Button>
      <div className={classes.imgContainer}>
        <img src={saving} alt="Link promocional" className={classes.imgLink} />
      </div>
      <div className={classes.body}>
        <span className={classes.titleBody}>
          Convide seus amigos e familiares para uma vida mais saudável e mais
          simples
        </span>
        {/* Esse texto deverá ser gerenciável pelo admin, mudando valores e regras */}
        <span className={classes.contentBody}>
          Compartilhe seu link promocional e ganhem juntos R$ 15,00 de desconto
          cada, na compra do kit semanal de marmitas
        </span>
      </div>
      <div className={classes.regras}>
        <span>
          O link estará disponível após você efetuar a 1ª compra de um kit
        </span>
        <span className={classes}>
          Assim que seu amigo realizar a 1ª compra (com o desconto do seu link)
          e seguir nosso perfil no instagram, seu desconto estará disponível
          automaticamente na sua próxima compra
        </span>

        <span>Quanto mais compartilhar, mais descontos você ganha!</span>

        <span>
          Não esqueçam de seguir nosso perfil no instagram, caso contrário, os
          descontos não serão ativados
        </span>
        {/* Neste container fica o link de compartilhamento */}
        <div className={classes.linkContainer}></div>
      </div>
      <Button onClick={config}>Voltar</Button>
    </div>
  );
};

export default ModalLinkPromocional;
