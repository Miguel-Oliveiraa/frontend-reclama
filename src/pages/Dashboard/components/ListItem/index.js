import React, { useState } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Pendente, Container, CustomInput } from "./styles.js";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import AlterarStatus from "../../../../services/denuncias/AlterarStatus.js";
import AdcionarDescricao from "../../../../services/denuncias/AdcionarDescricao.js";

export default function ListItem(props) {
  const [descricao, setDescricao] = useState("");
  const codigoJWT = localStorage.getItem("jwt");

  function handleClick() {
    AlterarStatus(codigoJWT, props.id);
    AdcionarDescricao(codigoJWT, props.id, descricao);
    window.location.reload();
  }

  return (
    <Container>
      <Accordion
        sx={{
          backgroundColor: "#202024",
          borderLeft: 8,
          borderColor: "#FF8500",
        }}
      >
        <AccordionSummary id="item">
          <div className="iconeStatus">
            {props.title}
            <Pendente>
              {props.status === 0 ? (
                <MdOutlineHourglassEmpty color="#FF8500" size={24} />
              ) : (
                <AiFillCheckCircle color="#FF8500" size={24} />
              )}
            </Pendente>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#ffffff", alignItems: "center" }}>
          <div className="itemDescriptionTitle">
            <HiOutlineClipboardList
              style={{ color: "#996DFF", marginRight: 4 }}
              size={20}
            />
            Descrição do problema
          </div>
          <p className="itemDescription">{props.description}</p>
          {props.status === 1 ? (
            <p className="itemDescription">
              Denuncia encerrada por: {props.atendenteData.nome} <br />
              {props.comentario === "" ? (
                ""
              ) : (
                <>Comentarios do atendente: {props.comentario}</>
              )}
            </p>
          ) : (
            <CustomInput
              type="text"
              placeholder="Adicione um comentário..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          )}
          {props.status === 1 ? (
            ""
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: "#FF8500", marginTop: 16 }}
              onClick={handleClick}
            >
              Encerrar denuncia
            </Button>
          )}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
