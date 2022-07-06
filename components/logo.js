import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';

import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-size: 18px;
    font-weight: bold;
    dispaly: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    display: flex;
    transition: transform 300ms ease-in-out;

    &:hover img {
        transform: rotate(20deg);
        transition: transform 300ms ease-in-out;
    }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} alt="logo" width={20} height={20} />
                    <Text 
                        color={useColorModeValue('#000', '#fff')}
                        ml={3}>
                            Anas Labzar
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;