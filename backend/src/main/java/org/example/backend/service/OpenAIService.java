package org.example.backend.service;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;


import org.example.backend.type.FakeNewsArticle;
import org.example.backend.type.MessageToOpenAI;
import org.example.backend.type.OpenAIResponse;
import org.example.backend.type.RequestToOpenAI;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Objects;

@Service
public class OpenAIService {

    private final RestClient restClient;

    public OpenAIService(RestClient.Builder restClientBuilder, @Value("${OpenAI_AuthKey}") String authentication) {

        this.restClient = restClientBuilder
                .baseUrl("https://api.openai.com/v1/")
                .defaultHeader("Authorization", "Bearer " + authentication)
                .build();
    }

    public FakeNewsArticle createFakeNews(String headline) throws JsonProcessingException {
        String prompt = """
                You are a witty satirical journalist. Take the following headline:
                "%s"
                
                1. Write a funny fake‐news article of approximately 400 words based on that headline.
                2. Then write a brief summary (2–3 sentences) of your fake news story.
                3. Write both in the language that the headline is in.
                4. Think where to insert line breaks into the text and indicate where you would put them by just writing (linebreak)
                
                Return only valid JSON with exactly two keys:
                {
                  "summary": "Your 2–3 sentence summary here.",
                  "content": "Your ~400‐word humorous fake news story here."
                }
                """.formatted(headline);
        MessageToOpenAI messageToOpenAI = new MessageToOpenAI("user", prompt);
        RequestToOpenAI finalizedRequest = new RequestToOpenAI("gpt-4.1", List.of(messageToOpenAI));

        String chatGPTAIOutput = Objects.requireNonNull(restClient.post()
                        .uri("chat/completions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(finalizedRequest)
                        .retrieve()
                        .body(OpenAIResponse.class))
                .choices()
                .getFirst()
                .message()
                .content();

        if (chatGPTAIOutput != null) {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(chatGPTAIOutput);
            String summary = rootNode.get("summary").asText();
            String content = rootNode.get("content").asText();
            return new FakeNewsArticle(summary, content);
        }
        return null;
    }
}
