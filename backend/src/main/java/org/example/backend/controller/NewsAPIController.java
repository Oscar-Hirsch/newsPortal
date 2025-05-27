package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.service.NewsService;
import org.example.backend.type.NewsArticle;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsAPIController {
    private final NewsService newsService;

    @GetMapping("/search")
    public List<NewsArticle> search(@RequestParam String query) {
         return newsService.getNews(query);
    }
}
