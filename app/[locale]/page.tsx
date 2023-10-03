import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button, Container, Input, Textarea } from "@/UI";
import { Layout } from "@/components";

export default function Home() {
    const t = useTranslations('Index');

    return (
        <Layout>
            <Container>
                <h1>{t('title')}</h1>
                <Link href="/search">Поиск</Link>
                <br />
                <Link href="/history">Истиория поиска</Link>
                <br />
                <Link href="/employees">Список сотрудников</Link>
                <br />
                <Button appearance={'primary'}>button</Button>
                <Input />
                <Textarea />
            </Container>
        </Layout>
    )
}
