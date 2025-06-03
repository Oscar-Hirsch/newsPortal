package org.example.backend.controller;
import lombok.RequiredArgsConstructor;
import org.example.backend.service.DatabaseService;
import org.example.backend.service.NewsService;
import org.example.backend.type.NewsArticle;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsController {
    private final NewsService newsService;
    private final DatabaseService databaseService;

    @GetMapping
    public List<NewsArticle> getAllNews() {
        return databaseService.getAllNews();
    }

    @GetMapping("/search")
    public List<NewsArticle> search(@RequestParam String q) {
        return newsService.getNews(q);
    }

    @GetMapping("/{id}")
    public NewsArticle getNewsArticle(@PathVariable String id) {
        return databaseService.getNewsArticleById(id);
    }



}
