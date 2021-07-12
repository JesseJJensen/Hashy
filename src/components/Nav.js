import StyledNavLink from './StyledNavLink'
const Nav = (props) => {
  return (
    <nav>
      <ul className='nav-list'>
        <StyledNavLink to='/wallet' text='My Wallets' />
        <StyledNavLink to='/new' text='Add Wallet' />
      </ul>
    </nav>
  )
}

export default Nav
