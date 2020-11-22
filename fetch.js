
class Fetch {
    async getCurrent(input) {
      const myKey = "f0a3da204b1b7a59c163923ce72b6049";
  
      //make request to url

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
    
  }
    
  