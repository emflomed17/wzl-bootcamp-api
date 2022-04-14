import axios, { AxiosResponse } from "axios";

// This should be stored in ENV
const headers = {
    'X-CMC_PRO_API_KEY': '00cb8cfc-9eaa-4513-87f9-ff37582bbafb'
}

const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export default async function getBitcoinPrice() {
    let btcInfo;
    try {
        const response: AxiosResponse = await axios.get(apiUrl, { headers });
        btcInfo= response.data.data[0];
      } catch (error) {
        console.error(error);
      }

      return {
        name: btcInfo.name,
        symbol: btcInfo.symbol,
        max_supply: btcInfo.max_supply,
        circulating_supply: btcInfo.circulating_supply,
        priceUSD: btcInfo.quote.USD.price        
    }
}
