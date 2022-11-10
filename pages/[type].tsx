import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import CalendlyForm from '../components/CalendlyForm';
import Header from '../components/header';

const Index: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;

    return (
        <>
            <Header />

            {(type &&
                <CalendlyForm type={type.toString()} />
            )}
        </>
    )
}

export default Index
