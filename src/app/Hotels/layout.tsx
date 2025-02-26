
export default function Layout({children}: {children: React.ReactNode}) {
return (
    <div>
        <section className='relative min-h-screen'>
            {children}
        </section>
    </div>
);
}