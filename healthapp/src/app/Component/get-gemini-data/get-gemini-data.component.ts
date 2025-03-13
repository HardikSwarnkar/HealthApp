import { Component, OnInit } from '@angular/core';
import { environment } from 'src/Environments/environment';
import { DataServiceService } from 'src/app/data-service.service';
import { GoogleGenerativeAI } from '@google/generative-ai'

@Component({
  selector: 'app-get-gemini-data',
  templateUrl: './get-gemini-data.component.html',
  styleUrls: ['./get-gemini-data.component.css']
})
export class GetGeminiDataComponent {

  result :any;
  constructor(private dataService : DataServiceService){}
  ngOnInit(){
    this.getGeminiResponse();
  }
   
  async getGeminiResponse(){
  const api_key = environment.apiKey;
  console.log("adding api key");
  const genAi = new GoogleGenerativeAI(api_key);
  const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash" });
  const userData = this.dataService.getUserData();

  console.log(`got user data as ${userData}`);

  const additionPrompt = 
  `My name is ${userData.Name}
   My age is ${userData.Age} and i am a ${userData.Gender},
   My Weight(in kg) and Height(in cm) ar ${userData.Weight} and ${userData.Height}
   ${userData.AdditionalInfo != null ? `And here is some additional info about me : ${userData.AdditionalInfo}` : ""};
   `

  const prompt = "Hey Gemini! Please behave as a health instructor. Below is my details please analyse it first \n"+additionPrompt+ "\n Now please provide complete infomation that what i need to follow as a deit and what schedule i need to follow daily.";
  console.log(`prompt = ${prompt}`)
  this.result = await model.generateContent(prompt);
  console.log(this.result);
  console.log("hurryyyyyy! got response");
  }
}
