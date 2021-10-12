import React from 'react';
import { MenuList, MenuItem, Typography } from '@mui/material';

function Category() {
  return (
    <MenuList
      sx={{
        display: 'flex',
        padding: '0px',
        '& li': { margin: '0 0 10px 10px' },
      }}>
      <MenuItem
        sx={{
          height: '22px',
          width: '96px',
          border: '1px solid black',
        }}>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{ height: '22px', width: '96px', border: '1px solid black' }}>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{ height: '22px', width: '96px', border: '1px solid black' }}>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{ height: '22px', width: '96px', border: '1px solid black' }}>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{ height: '22px', width: '96px', border: '1px solid black' }}>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
    </MenuList>
  );
}

export default Category;
