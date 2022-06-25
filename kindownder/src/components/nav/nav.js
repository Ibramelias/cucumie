import './nav.css'

export default function Nav() {
    return (
        <div className='nav__aside'>
            <nav>
                <ul className='aside__nav-ul'>
                    <li className='aside__nav-li'><img className='logo' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='logo' /></li>
                    <li className='aside__nav-li'><a href='#'><span><ion-icon name="home-outline"></ion-icon></span>Home</a></li>
                    <li className='aside__nav-li'><a href='#'><span><ion-icon name="search-outline"></ion-icon></span>Search</a></li>
                    <li className='aside__nav-li'><a href='#'><span><ion-icon name="library-outline"></ion-icon></span>Your Library</a></li>
                </ul>
            </nav>
        </div>
    )
}