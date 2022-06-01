import React from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <Link to="/redux-toolkit-shopping-cart/">About</Link>
      <Link to="/redux-toolkit-shopping-cart/products">Products</Link>
      <Link to="/redux-toolkit-shopping-cart/cart">
        <MenuItem>
          <Badge badgeContent={cartTotalQuantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Link>
    </nav>
  );
};
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
export default Navbar;
