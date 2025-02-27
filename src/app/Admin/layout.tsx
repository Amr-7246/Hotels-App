import BackGround from './components/BackGround'
import NavBar from './components/NavBar'

export default function Layout({children}: {children: React.ReactNode}) {
return (
    <div>
        <BackGround/>
        <section className='relative min-h-screen'>
            {children}
            <NavBar/>
        </section>
    </div>
);
}