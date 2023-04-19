import { styled } from "@mui/material";
import { Autocomplete } from "@mui/material";

export const CustomAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiAutocomplete-inputroot": {
    color: theme.custom.secondary.main,
    decoration: "none",
    border: `solid 1px ${theme.custom.primary}`,
  },
  "& .MuiAutocomplete-option": {
    backgroundColor: "lightblue", // Change option background color
    "&.Mui-selected": {
      backgroundColor: "blue", // Change selected option background color
    },
  },
}));
