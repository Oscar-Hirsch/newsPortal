package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.repository.NewsRepository;
import org.example.backend.type.NewsArticle;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DatabaseService {
    private final NewsRepository newsRepository;

    public List<NewsArticle> getAllNews() {
        return newsRepository.findAll();
    }

    public NewsArticle getNewsArticleById(String id) {
        return newsRepository.findById(id).orElse(null);
    }
}
