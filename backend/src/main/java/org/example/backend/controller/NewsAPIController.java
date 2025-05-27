package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.service.NewsService;
import org.example.backend.type.SafedSearches;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsAPIController {
    private final NewsService newsService;

    @GetMapping("/search")
    public SafedSearches search(@RequestParam String query) {
         return newsService.getNews(query);
    }
}
