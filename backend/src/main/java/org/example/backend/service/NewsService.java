package org.example.backend.service;
import org.example.backend.type.ApiResponse;
import org.example.backend.type.NewsArticle;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class NewsService {

    private final RestClient restClient;


    public NewsService(RestClient.Builder restClientBuilder, @Value("${API_KEY}") String authentication) {

        this.restClient = restClientBuilder
                .baseUrl("https://newsapi.org/v2/")
                .defaultHeader("x-api-key", authentication)
                .build();
    }

    public List<NewsArticle> getNews(String country, String category) {

        ApiResponse response = restClient
                .get()
                .uri("top-headlines?country={country}&category={category}", country, category)
                .retrieve()
                .toEntity(ApiResponse.class)
                .getBody();

        if (response != null) {
            if (!response.articles().isEmpty()) {
                return response.articles();
            }
        }
        return null;
    }




}
