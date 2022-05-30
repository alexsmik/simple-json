import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { mobile } from '../responsive';

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <Link to="/">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">
        <MenuItem>
          <Badge badgeContent={cartTotalQuantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Link>
    </nav>
  );
};
export default Navbar;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
