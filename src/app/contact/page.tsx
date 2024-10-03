import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <div className='pt-12'>
                <ContactForm />
            </div>
        </>
    );
}
