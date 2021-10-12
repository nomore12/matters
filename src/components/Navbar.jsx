import React from 'react';
import { MenuList, MenuItem, Typography } from '@mui/material';

function Navbar() {
  return (
    <>
      <MenuList>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu1</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu2</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu3</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu4</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu5</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu6</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu7</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu8</Typography>
        </MenuItem>
        <MenuItem sx={{ height: '3rem' }}>
          <Typography variant="caption">menu9</Typography>
        </MenuItem>
      </MenuList>
    </>
  );
}

export default Navbar;
