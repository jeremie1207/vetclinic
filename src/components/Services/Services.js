
import './Services.css';
import Container from 'react-bootstrap/esm/Container';
import Service from './Service';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {

    const { t } = useTranslation(); 

    const services = [{
        id: Math.random(),
        name: t("Routine_care"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.',
        price: 123
    },
    {
        id: Math.random(),
        name: t("Clinical_diagnostic_tests"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.',
        price: 123
    },
    {
        id: Math.random(),
        name: t("Surgery"),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.',
        price: 123
    },
    {
        id:Math.random(), 
        name: t("Dentistry"), 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.',
        price: 123
    },
    {
        id:Math.random(), 
        name: t("Diet_advice"), 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pharetra mauris. Nullam vitae orci eget lacus pellentesque condimentum sit amet sagittis diam. Suspendisse maximus justo non turpis ornare iaculis eget aliquet sem. Quisque at velit nec augue hendrerit feugiat quis nec sem. Ut in maximus nunc, ac rutrum ligula. Integer tempus nunc vitae gravida fringilla. Donec ullamcorper ultricies eros nec pharetra. Integer ac nisi orci. Duis ultrices massa a sagittis dignissim. Etiam ante ligula, hendrerit ac condimentum ut, semper et ipsum. Nunc ullamcorper condimentum purus, et elementum lacus rutrum vel. Sed nec ex fermentum, faucibus leo quis, imperdiet est. Pellentesque sodales dolor et lacus pharetra auctor. Mauris ornare, sapien ac rutrum hendrerit, arcu tortor accumsan purus, finibus euismod mi magna in velit. Vestibulum sit amet orci interdum, bibendum nunc et, aliquam libero.',
        price: 0
    }

    ];

    return (<div className='services' id='services'>
        <Container>
            <h3 className="title">{t("How_can_we_help_you")}</h3>
            <Service data={services} id='services'/>
        </Container>
    </div>);
}

export default Services;