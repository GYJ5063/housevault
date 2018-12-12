import React, { PureComponent } from 'react'
import '../../styles/agent-dashboard.scss';

export default class Profile extends PureComponent {
    state = { isOpenMenu: false }

    handleToggleProfileClick = (event) => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }

    render () {
        const { name = 'NONTACHAI', avatar = 'https://avatars0.githubusercontent.com/u/14027068?s=400&v=4' } = this.props
        const { isOpenMenu } = this.state
        const { handleToggleProfileClick } = this
        return (
            <div className='profile' onClick={handleToggleProfileClick}>
                <h4>{name}</h4>
                <img src={avatar} />
                <div className='profile-menu' style={{'opacity': isOpenMenu ? '1' : '0'}}>
                    <ul>
                        <li>
                            <i className="fas fa-user"></i>
                            <a href=''>Profile</a>
                        </li>
                        <li>
                            <i className="fas fa-sign-out-alt"></i>
                            <a href=''>Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}