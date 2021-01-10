import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

const IndexPage = () => {
    //Esta sintaxis de mensaje permite definir, traducir
    const { formatMessage } = useIntl();
    const translate = (id) => formatMessage({ id });
    
    //hook de enrutamiento - next.js
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;

    console.log(':::: Current locale/Local Actual : ',locale);
    console.log(':::: Default locale/Configuración regional predeterminada : ',locales);
    console.log(':::: Configured locales/Locales configurados : ',defaultLocale);

    return (
        <div>
            <h1>{translate('hello')}</h1>
            <p>{translate('welcomeMessage')}</p>
        </div>    
    )
}

export default IndexPage;