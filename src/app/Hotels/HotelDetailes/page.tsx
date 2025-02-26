import GlobalNavBar from '@/app/components/GlobalNavBar';
import Search from '../components/Search'
import HotelHero from './components/HotelHero'

export default function Page() {
    return (
        <div>
            <div className='pt-8'>
                <Search/>
            </div>
            <div className= ' bg-stone-900 ' >
                <HotelHero/>
            </div>
        <GlobalNavBar/>
        </div>
    );
}