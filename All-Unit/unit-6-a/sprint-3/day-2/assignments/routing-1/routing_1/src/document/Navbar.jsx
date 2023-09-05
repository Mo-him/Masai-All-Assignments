import styled from '@emotion/styled'
import {Link} from 'react-router-dom';
// import styled from '@emotion/styled'
const NavbarWrapper=styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
`;


function Navbar(){

    return(
        <NavbarWrapper>
            <Link to='/'>Home</Link>
            <Link to='/AllProducts'>All Products</Link>
            <Link to='/ProductDetails'>Product Detail</Link>
        </NavbarWrapper>
    )
}
export default Navbar;