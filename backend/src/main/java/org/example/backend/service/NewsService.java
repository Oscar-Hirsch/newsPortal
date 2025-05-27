package org.example.backend.service;

import org.example.backend.repository.NewsRepository;
import org.example.backend.type.ApiResponse;
import org.example.backend.type.SafedSearches;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

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

    public SafedSearches getNews(String query) {

        ApiResponse response = restClient
                .get()
                .uri("everything?q={query}&searchIn=title&language=de&sortBy=popularity", query)
                .retrieve()
                .toEntity(ApiResponse.class)
                .getBody();
        if (response != null) {
            if (!response.articles().isEmpty()) {
                SafedSearches safedSearches = new SafedSearches(query, response.articles());
                return newsRepository.save(safedSearches);
            }
        }
        return null;
    }




}
