// 'use client'
import {Htag} from "@/UI/Htag/Htag";
import {useTranslations} from "next-intl";

const ProfilePage = () => {
    const t = useTranslations('Auth');
    return (
        <div>
            <Htag tag={'h3'}>
                {t('loginTitle')}
            </Htag>
        </div>
    );
};

export default ProfilePage;
