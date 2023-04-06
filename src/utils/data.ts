import { BsHospital } from 'react-icons/bs';
import { FaUmbrellaBeach, FaStethoscope, FaHandHoldingHeart } from 'react-icons/fa';
import obamaCare from '../assets/obamacare-logo.jpg';
import retirement from '../assets/retirement-wishes-feat.jpg';
import living from '../assets/Playful-family.jpg';

export const menuData = [
    {
        id: 1,
        name: 'Home',
        icon: '',
        to: '/',
    },
    {
        id: 2,
        name: 'Services',
        icon: '',
        to: '/services'
    },
    {
        id: 3,
        name: 'Location',
        icon: '',
        to: '/location'
    },
    {
        id: 4,
        name: 'About Us',
        icon: '',
        to: '/about'
    }
];

export const services =[
    {
        id: 1,
        title: 'Life Insurance with Living Benefit',
        data: 'Living',
        icon:FaHandHoldingHeart
    },
    {
        id: 2,
        title: 'Life Insurance with Hospital Benefit',
        data: 'Hospital',
        icon: BsHospital
    },
    {
        id: 3,
        title: 'ObamaCare Health Insurance',
        data: 'ObamaCare',
        icon: FaStethoscope
    },
    {
        id: 4,
        title: 'Retirement Investment',
        data: 'Retirement',
        icon: FaUmbrellaBeach
    }
];

export const slide = [
    {
        id: 1,
        title: 'ObamaCare Health Insurance',
        image: obamaCare,
        icon: FaStethoscope,
        data: 'ObamaCare Health Insurance'
    },
    {
        id: 1,
        title: 'Retirement Investment',
        image: retirement,
        icon: FaUmbrellaBeach,
        data: 'Retirement Investement'
    },
    {
        id: 1,
        title: 'Life Insurance with Living Benefit',
        image: living,
        icon: FaHandHoldingHeart,
        data: 'Living Benefit'
    },
    {
        id: 1,
        title: 'ObamaCare Health Insurance',
        image: obamaCare,
        icon: BsHospital,
        data: 'Hospital Benefit'
    },
];