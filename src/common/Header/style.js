import styled from 'styled-components'
import logoUrl from '../../static/logo.png'

export const HeaderWrapper = styled.nav`
  height: 56px;
  line-height: 56px;
  border-bottom: 1px solid #e7e7e7;
`
export const HeaderMain = styled.div`
  position: relative;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  width: 100px;
  height: 56px;
  background: url(${logoUrl});
  background-size: contain;
  border-bottom: 1px solid #e7e7e7;
`

export const NavWrapper = styled.div`
  
  width: 945px;
  height: 56px;
  line-height: 56px;
  margin: 0 auto;

`

export const NavItem = styled.a`
  font-size: 17px;
  padding: 0 15px;
  color: #555;
  cursor: pointer;
  &.active{
    color: #ea6f5a;
  }
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }

`

export const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height: 56px;
`

export const Button = styled.button`
  height: 38px;
  padding:  9px 20px;
  background: none;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-left: 20px;
  cursor: pointer;
  &.reg{
    color: #ec6149;
    border: 1px solid #ec6149;
  }
  &.write{
    color: #fff;
    background-color: #ec6149;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  padding-left: 20px;
  margin-right: 10px;
  
`

export const SearchInput = styled.input.attrs({
  placeholder: "搜索"
})`
  &.focused{
    width: 340px;
  }
  &.slide-enter, &.slide-exit{
    transition: all .3s ease-out;
  }
  &.slide-enter-active{
    width: 340px;
  }
  &.slide-exit-active{
    width: 160px;
  }
  outline: none;
  width: 160px; 
  height: 38px;
  border-sizing: border-box;
  padding: 0 40px 0 20px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  cursor: pointer;
`