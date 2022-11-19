import React, { useState, useEffect } from "react";
import { Container, Header, Search, List, CustomInput } from "./styles";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Logo from "../../assets/reclama.png";
import ListItem from "./components/ListItem";
import GetDenuncias from "../../services/denuncias/GetDenuncias";

export default function Dashboard() {
  const [titulo, setTitulo] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [status, setStatus] = useState();

  function searchFilter(text) {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.titulo
          ? item.titulo.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setTitulo(text);
    } else {
      setFilterData(masterData);
      setTitulo(text);
    }
  }

  function filters() {
    console.log("teste");
  }
  useEffect(() => {
    async function fetchData() {
      const response = await GetDenuncias();
      setMasterData(response);
      setFilterData(response);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logoReclama" />
      </Header>
      <Search>
        <CustomInput
          type="text"
          placeholder="Pesquisa uma denúncia"
          value={titulo}
          onChange={(e) => searchFilter(e.target.value)}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Filtros</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Age"
            sx={{ bgcolor: "#FF8500", color: "#FFFFFF" }}
          >
            <MenuItem value={0}>Problemas estruturais</MenuItem>
            <MenuItem value={1}>Violência</MenuItem>
            <MenuItem value={2}>Manutenção de ruas</MenuItem>
            <MenuItem value={3}>Falta de energia</MenuItem>
            <MenuItem value={4}>Acidentes</MenuItem>
            <MenuItem value={5}>Resgates</MenuItem>
            <MenuItem value={6}>Outros</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Age"
            sx={{ bgcolor: "#DADADA", color: "#686D73" }}
            value={status}
            onChange={setStatus}
          >
            <MenuItem value={1}>Pendentes</MenuItem>
            <MenuItem value={2}>Finalizados</MenuItem>
          </Select>
        </FormControl>
      </Search>
      <List>
        {filterData.map((item) => {
          return (
            <ListItem
              key={item._id}
              id={item._id}
              title={item.titulo}
              description={item.descricao}
              status={item.status}
              comentario={item.comentario}
              atendenteData={item.atendente_id}
            />
          );
        })}
      </List>
    </Container>
  );
}
