import './tobBar.css'


export default function TopBar() {
    return (
        <div className='top__bar'>
            <div className='top__bar-links'>
                <ul className='top__bar-ul'>
                    <li className='top__bar-li'><a href='#'>Premium</a></li>
                    <li className='top__bar-li'><a href='#'>Support</a></li>
                    <li className='top__bar-li'><a href='#'>Download</a></li>
                    <li className='border'></li>
                    <li className='top__bar-li'><button className='signIn'>Sign In</button></li>
                    <li className='top__bar-li'><button className='logIn'>Log In</button></li>
                </ul>
            </div>
        </div>
    )
}