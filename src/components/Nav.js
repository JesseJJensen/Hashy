import StyledNavLink from './StyledNavLink'
const Nav = (props) => {
  return (
    <nav>
      <ul className='nav-list'>
        <StyledNavLink to='/home2' text='Home Page' />
        <StyledNavLink to='/new' text='Create New Bounty' />
      </ul>
    </nav>
  )
}

export default Nav
