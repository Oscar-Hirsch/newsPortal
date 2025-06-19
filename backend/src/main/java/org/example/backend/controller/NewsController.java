package org.example.backend.controller;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.example.backend.service.DatabaseService;
import org.example.backend.service.NewsService;
import org.example.backend.service.MistralAIService;
import org.example.backend.type.FakeNewsArticle;
import org.example.backend.type.NewsArticle;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsController {
    private final NewsService newsService;
    private final DatabaseService databaseService;
    private final MistralAIService openAIService;

    @GetMapping
    public List<NewsArticle> getAllNews() {
        return databaseService.getAllNews();
    }

    @GetMapping("/search")
    public List<NewsArticle> search(@RequestParam String country, @RequestParam String category) {
        return newsService.getNews(country, category);
    }

    @GetMapping("/{id}")
    public NewsArticle getNewsArticle(@PathVariable String id) {
        return databaseService.getNewsArticleById(id);
    }

    @PostMapping("/save")
    public NewsArticle saveNewsArticle(@RequestBody NewsArticle newsArticle) {
        return databaseService.saveNewsArticle(newsArticle);
    }

    @DeleteMapping("/delete")
    public void deleteNewsArticle(@RequestParam String id) {
        databaseService.deleteNewsArticle(id);
    }

    @PostMapping("/createFakeNews")
    public FakeNewsArticle createFakeNewsArticle(@RequestBody String title) throws JsonProcessingException {
        return openAIService.createFakeNews(title);
    }
}
