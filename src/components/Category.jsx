import React from 'react';
import { MenuList, MenuItem, Typography, Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const CategoryButton = styled(Button)(({ theme }) => ({
  color: 'black',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
}));

function Category() {
  return (
    <MenuList
      sx={{
        display: 'flex',
        padding: '0px',
        justifyContent: 'flex-end',
        '& li': { margin: '0 0 10px 10px' },
      }}>
      <MenuItem
        sx={{
          height: '22px',
          width: '72px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
        disableRipple>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{
          height: '22px',
          width: '72px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
        disableRipple>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{
          height: '22px',
          width: '72px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
        disableRipple>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{
          height: '22px',
          width: '72px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
        disableRipple>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
      <MenuItem
        sx={{
          height: '22px',
          width: '72px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
        disableRipple>
        <Typography variant="caption">categorys</Typography>
      </MenuItem>
    </MenuList>
  );
}

export default Category;
