// import { Autocomplete } from "@mui/material";
// import { NextComponentType } from "next";

// const options = [
//   { label: "The Godfather", id: 1 },
//   { label: "Pulp Fiction", id: 2 },
// ];

// const SearchBar: NextComponentType = () => {
//   return (
//     <label>
//       Value:{" "}
//       <Autocomplete
//         sx={{
//           display: "inline-block",
//           "& input": {
//             width: 200,
//             bgcolor: "background.paper",
//             fontSize: ""
//             color: (theme) => theme.custom.secondary.main,
//           },
//         }}
//         id="custom-input-demo"
//         options={options}
//         renderInput={(params) => (
//           <div ref={params.InputProps.ref}>
//             <input type="text" {...params.inputProps} />
//           </div>
//         )}
//       />
//     </label>
//   );
// };
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SearchBox = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [filtering, setFiltering] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (event.target.value.length > 0) {
      setFiltering(true);
    } else {
      setFiltering(false);
    }

    // You can filter options here based on the input value
    // and update the options state accordingly
  };

  return (
    <Autocomplete
      disablePortal
      options={options}
      getOptionLabel={(option) => option}
      sx={{ width: "100%", mt: "20px" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            sx: {
              borderColor: filtering ? "#1976d2" : "#a0a0a0",
              "&:hover": {
                borderColor: filtering ? "#1976d2" : "#a0a0a0",
              },
            },
            onChange: handleInputChange,
          }}
        />
      )}
    />
  );
};

export default SearchBox;
