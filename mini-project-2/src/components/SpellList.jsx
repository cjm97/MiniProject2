import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { spellTypeOptions } from "./ListItems";
import SpellPagination from "./Pagination";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const spellsPerPage = 20;

export default function SpellList() {
  const [spellList, setSpellList] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/Spells")
      .then((response) => response.json())
      .then((data) => {
        setSpellList(data);
      });
  }, []);

  const filteredSpells = spellList.filter((spell) => {
    if (filterOption && spell.type !== filterOption) {
      return false;
    }

    if (
      filterText &&
      !spell.name.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const totalItems = filteredSpells.length;
  const totalPages = Math.ceil(totalItems / spellsPerPage);
  const startIndex = (currentPage - 1) * spellsPerPage;
  const endIndex = startIndex + spellsPerPage;
  const currentSpells = filteredSpells.slice(startIndex, endIndex);

  const handleFilterOptionChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1 className="page__header">Spells</h1>
      <form className="spell__form">
        <Box component="form" sx={{ minWidth: 300 }} noValidate autoComplete="off">
          <TextField
            id="spell__search"
            label="Search by name..."
            variant="filled"
            value={filterText}
            onChange={handleFilterTextChange}
          />
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="spell__type__selection">Spell Type</InputLabel>
            <Select
              labelId="spell__type__selection"
              id="select-spell-type"
              label="Spell Type"
              value={filterOption}
              onChange={handleFilterOptionChange}
            >
              {spellTypeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </form>
      {currentSpells.map((spell) => (
        <Grid item xs={12} sm={6} md={3} key={spell.id} className="spell__list--container">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="300"
              image={"src/assets/" + spell.type + ".jpg"}
              alt={spell.type}
            />
            <CardContent className="spell__card--content">
              <Typography gutterBottom variant="h5" component="div">
                {spell.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {spell.incantation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {spell.type === "DarkCharm"
                  ? `${spell.type.replace(
                      "DarkCharm",
                      "Dark Charm"
                    )} type spell: ${spell.effect}`
                  : spell.type === "HealingSpell"
                  ? `${spell.type.replace(
                      "HealingSpell",
                      "Healing Spell"
                    )} type spell: ${spell.effect}`
                  : spell.type === "Spell"
                  ? `Type: ${spell.type}. General spell. ${spell.effect}`
                  : spell.type === "DarkArts"
                  ? `${spell.type.replace(
                      "DarkArts",
                      "Dark Arts"
                    )} type spell: ${spell.effect}`
                  : spell.type === "CounterCharm"
                  ? `${spell.type.replace(
                      "CounterCharm",
                      "Counter Charm"
                    )} type spell: ${spell.effect}`
                  : spell.type === "None"
                  ? `Unknown spell type. ${spell.effect}.`
                  : spell.type === "CounterJinx"
                  ? `${spell.type.replace(
                      "CounterJinx",
                      "Counter Jinx"
                    )} type spell: ${spell.effect}`
                  : spell.type === "CounterSpell"
                  ? `${spell.type.replace(
                      "CounterSpell",
                      "Counter Spell"
                    )} type spell: ${spell.effect}`
                  : spell.type === "MagicalTransportation"
                  ? `${spell.type.replace(
                      "MagicalTransportation",
                      "Magical Transportation"
                    )} type spell: ${spell.effect}`
                  : spell.type === "BindingMagicalContract"
                  ? `${spell.type.replace(
                      "BindingMagicalContract",
                      "Binding Magical Contract"
                    )} type spell: ${spell.effect}`
                  : `${spell.type} type spell: ${spell.effect}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <SpellPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
