// Base inicial do sistema
// Aprimoramento depende dos parametros de desejo do usuário

import axios from 'axios';

let BASE_URL = process.env.BASE_URL;
let API_KEY = process.env.API_KEY;

export async function getIPInfo(ip: string): Promise<any> {
    try {
        const response = await axios.get(`${BASE_URL}/${ip}/json?token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter informações do IP:', error);
        throw error;
    }
}

export async function compareIPs(ip1: string, ip2: string): Promise<any> {
    try {
        const info1 = await getIPInfo(ip1);
        const info2 = await getIPInfo(ip2);

        const sameProvedor = info1.org === info2.org;
        const sameCity = info1.city === info2.city;
        const sameCountry = info1.country === info2.country;

        if (sameProvedor && sameCity && sameCountry) {
            console.log('Os IPs parecem pertencer ao mesmo destinatário.');
            return true;
        } else {
            console.log('Os IPs parecem pertencer a destinatários diferentes.');
            return false;
        }
    } catch (error) {
        console.error('Erro ao comparar IPs:', error);
    }
}