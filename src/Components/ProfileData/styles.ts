import styled , { css } from 'styled-components';

import { RiBookmarkLine, RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri'

export const Container = styled.div`
        flex: 8;
        padding: 0 32px;
        margin-top: 50px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media(max-width: 1128px) {
            margin-left: 150px;
    }
`;

export const Flex = styled.div`
    > div{
        margin-left: 24px;
        > h1 {
            font-size: 26px;
            line-height: 1.25;
            color: var(--gary-dark);
            font-weight: 600;
        }

        > h2{
            font-size: 20px;
            color: var(--username);
            font-weight: 300;
        }
    }

    @media (min-width: 768px){
        flex-direction: column;
        align-items: flex-start;

        > div{
            margin-left: 0;
            margin-top: 16px;
        }
    }
`;

export const Avatar = styled.img`
    width: 16%;
    border-radius: 50%;

    @media (min-width: 768px){
        width: 100%;
        margin-top: -34px;
    }
`;

export const Row = styled.ul`
    display: flex;
    align-items: center;

    > li{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 20px 0;

        > span{
            font-size: 14px;
            color: var(--gray);
        }
        > *{
            margin-right: 5px;
        }
        b{
            margin-bottom: 2.5px;
        }
    }

    @media(max-width: 1450px) {
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 1128px) {
        display: flex;
        flex-direction: row;
        margin-left: 45px;
        > li{
            flex-wrap: nowrap;
        }
    }
`;

const iconCSS = css `
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const Column = styled.ul`
    li{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    li + li{
        margin-top: 10px;
    }
    span{
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

`;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon = styled(RiMapPin2Line)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;

export const RepoIcon = styled(RiBookmarkLine)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;