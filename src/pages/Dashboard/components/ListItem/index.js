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

export default function ListItem(props) {
  const [descricao, setDescricao] = useState("");

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
              {props.status === 1 ? (
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
          <CustomInput
            type="text"
            placeholder="Pesquisa uma denúncia"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#FF8500", marginTop: 16 }}
          >
            Marcar como solucionado
          </Button>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
