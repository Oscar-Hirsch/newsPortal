package org.example.backend.service;

import org.example.backend.repository.NewsRepository;
import org.example.backend.type.ApiResponse;
import org.example.backend.type.NewsArticle;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class NewsService {

    private final RestClient restClient;
    private final NewsRepository newsRepository;

    public NewsService(NewsRepository newsRepository, RestClient.Builder restClientBuilder, @Value("${API_KEY}") String authentication) {

        this.restClient = restClientBuilder
                .baseUrl("https://newsapi.org/v2/")
                .defaultHeader("x-api-key", authentication)
                .build();
        this.newsRepository = newsRepository;
    }

    public List<NewsArticle> getNews(String query) {

        ApiResponse response = restClient
                .get()
                .uri("everything?q={query}&searchIn=title&language=de&sortBy=popularity", query)
                .retrieve()
                .toEntity(ApiResponse.class)
                .getBody();
        if (response != null) {
            if (!response.articles().isEmpty()) {
                return newsRepository.saveAll(response.articles());
            }
        }
        return null;
    }




}
