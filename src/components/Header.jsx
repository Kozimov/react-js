import logo from '../assets/img/brand.png'

const Header = () => {
    return (
        <>
            <div className="container">
                <a href="#">
                    <img src={logo} alt="site logo" />
                </a>
            </div>
            <header>
                <h1>Men Headerman</h1>
            </header>
        </>
    )
};

export default Header;