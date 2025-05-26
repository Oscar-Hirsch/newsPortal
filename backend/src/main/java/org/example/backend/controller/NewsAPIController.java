package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.service.NewsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/home")
@RequiredArgsConstructor
public class NewsAPIController {
    private final NewsService newsService;

    @GetMapping("search")
    public void search(@RequestBody String query) {
         newsService.getNews(query);
    }
}
