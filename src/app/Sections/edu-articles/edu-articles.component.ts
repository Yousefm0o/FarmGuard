import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-edu-articles',
  templateUrl: './edu-articles.component.html',
  styleUrl: './edu-articles.component.css'
})
export class EduArticlesComponent implements OnInit {

  articles: any[] = [
    {
      name: 'Soil Health and Fertility Management',
      title: 'Understanding Soil pH and Nutrient Balancing for Better Crop Yields',
      intro: 'Soil health is the foundation of successful farming. Maintaining the right balance of nutrients in the soil is critical for growing healthy crops and achieving optimal yields. One of the key aspects of soil health is pH balance, which affects nutrient availability and crop growth.',
      points: [
        {
          point: 'Why Soil pH Matters',
          desc: 'Soil pH determines how easily plants can absorb nutrients. A soil pH range of 6.0 to 7.5 is ideal for most crops, as it allows nutrients to be readily available.'
        },
        {
          point: 'Nutrient Management',
          desc: 'Regular soil testing helps farmers understand nutrient deficiencies. Based on the results, you can apply the right type and amount of fertilizer to balance nitrogen, phosphorus, and potassium levels.'
        },
        {
          point: 'Organic Matter',
          desc: 'Incorporating organic matter, such as compost or green manure, can improve soil structure and water retention while providing essential nutrients to the soil.'
        },
      ],
      conclusion: 'Farmers should test soil regularly and adjust fertilization schedules accordingly. Agronomists can provide tailored nutrient management plans based on local soil conditions to ensure maximum crop productivity.'
    },
    {
      name: 'Water Conservation in Agriculture',
      title: 'Smart Irrigation Techniques: Saving Water and Boosting Efficiency',
      intro: 'Water is one of the most precious resources in agriculture, and its efficient use can make the difference between a good harvest and crop failure. With increasing water scarcity in many regions, smart irrigation techniques are essential for conserving water while maintaining healthy crops.',
      points: [
        {
          point: 'Drip Irrigation',
          desc: 'Drip irrigation delivers water directly to the roots of plants, minimizing evaporation and water runoff. This method can reduce water usage by up to 40% compared to traditional irrigation systems.'
        },
        {
          point: 'Smart Irrigation Systems',
          desc: 'Using data from soil moisture sensors and weather forecasts, smart irrigation systems provide real-time adjustments to watering schedules, ensuring plants receive the right amount of water at the right time.'
        },
        {
          point: 'Mulching',
          desc: 'Applying mulch around plants can help retain soil moisture and reduce evaporation, especially in hot climates.'
        },
      ],
      conclusion: 'Water conservation is key to sustainable agriculture. Farmers should consider adopting smart irrigation technologies, and agronomists can help farmers implement these systems effectively to save water and boost crop efficiency.'
    },
    {
      name: 'Climate-Resilient Farming',
      title: 'Adapting to Climate Change: Crop Varieties and Farming Strategies for the Future',
      intro: 'As climate change continues to affect weather patterns, farmers face challenges such as drought, heat stress, and unpredictable rainfall. Adopting climate-resilient crops and farming practices can help farmers mitigate these risks and maintain productivity.',
      points: [
        {
          point: 'Drought-Resistant Crops',
          desc: 'Planting crops that can tolerate drought, such as sorghum, millet, or certain varieties of maize, can help farmers survive periods of low rainfall.'
        },
        {
          point: 'Heat-Tolerant Varieties',
          desc: 'As temperatures rise, selecting heat-tolerant crops becomes crucial. New varieties of wheat, rice, and beans are being developed to withstand higher temperatures.'
        },
        {
          point: 'Adapting Planting Schedules',
          desc: 'By monitoring weather forecasts and adjusting planting times, farmers can take advantage of favorable conditions and avoid extreme weather events.'
        },
      ],
      conclusion: 'Farmers should consider climate-resilient crops and adjust their farming strategies to cope with changing conditions. Agronomists can provide advice on selecting appropriate crop varieties and optimizing planting schedules.'
    }
  ];

  pagedArticle: any;
  currentPage: number = 1;

  constructor() {}

  ngOnInit() {
    this.pagedArticle = this.articles[this.currentPage - 1];
  }

  next() {
    if (this.currentPage < this.articles.length) {
      this.currentPage++
    }
    this.pagedArticle = this.articles[this.currentPage - 1];
  }

  previous() {
    if (this.currentPage > 1) {
      this.currentPage--
    }
    this.pagedArticle = this.articles[this.currentPage - 1];
  }
}
