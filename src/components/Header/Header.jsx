import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className = {s.img} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3bd7e121125695.60bf920c469ea.png"/>
        </header>
    )
}

export default Header;