export default class CurrencyService {
  static async getCurrency() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      if (!response.ok) {
        throw Error(response.status)
      }
      return response.json();
    } catch(err) {
      return Error(err);
    }
  }
}