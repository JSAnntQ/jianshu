import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, HeaderMain, Logo, NavWrapper, NavItem, Addition, Button, SearchWrapper, SearchInput } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class Header extends Component {
  
  render(){
    let { focused, handleBlur, handleFocus } = this.props
    return (
      <HeaderWrapper>
        <HeaderMain>
          <Logo />
          <NavWrapper>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>Aa</NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout = { 300 }
                classNames = 'slide'
              >
                <SearchInput onBlur={handleBlur} onFocus={handleFocus} className={focused?'focused':''}></SearchInput>
              </CSSTransition>  
            </SearchWrapper>
           
          </NavWrapper>
          <Addition>
            <Button className='reg'>注册</Button>
            <Button className='write'>写文章</Button>
          </Addition>
        </HeaderMain>  
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log(state.get('header').get('focused'))
  return {
    focused: state.getIn(['header','focused'])
   
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleFocus(){
      dispatch(actionCreators.actionFocus())
    },
    handleBlur(){
      dispatch(actionCreators.actionBlur())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)