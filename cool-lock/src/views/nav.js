const Nav = () => `
<nav>
        <div class="nav-left">
            <h1>Dashboard</h1>
        </div>
        <div class="nav-right">
            <ul>
                <li><a href="#">DASHBOARD</a></li>
                <li><a href="/account">ACCOUNT</a></li>
            </ul>
            <div class="hamburger" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="user-avatar"></div>
        </div>
    </nav>
`;

export default Nav;
