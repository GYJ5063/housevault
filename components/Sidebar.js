import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from '../routes';

export default (props) =>
    <div className="col-2">
        <Nav vertical>
            <NavItem>
                <Link route='/dashboard'>
                <NavLink href="#">Dashboard</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link route='/config'>
                <NavLink href="#">Config</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link route='/dashboard'>
                <NavLink href="#">Account details</NavLink>
                </Link>
            </NavItem>
        </Nav>

    </div>