package org.example.backend.service;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;


import org.example.backend.type.FakeNewsArticle;
import org.example.backend.type.MessageToMistralAI;
import org.example.backend.type.MistralAIResponse;
import org.example.backend.type.RequestToMistralAI;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Objects;

@Service
public class MistralAIService {

    private final RestClient restClient;

    public MistralAIService(RestClient.Builder restClientBuilder, @Value("${OpenAI_AuthKey}") String authentication) {

        this.restClient = restClientBuilder
                .baseUrl("https://api.mistral.ai/v1/")
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
                
                Respond only with **only** a JSON object with these two keys and nothing else. Do **not** include any markdown fences, code boxes, or extra text—just the JSON:
                {
                  "summary": "Your 2–3 sentence summary here.",
                  "content": "Your ~400‐word humorous fake news story here."
                }
                """.formatted(headline);
        MessageToMistralAI messageToMistralAI = new MessageToMistralAI("user", prompt);
        RequestToMistralAI finalizedRequest = new RequestToMistralAI("mistral-small-latest", List.of(messageToMistralAI));

        String mistralAIOutput = Objects.requireNonNull(restClient.post()
                        .uri("chat/completions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(finalizedRequest)
                        .retrieve()
                        .body(MistralAIResponse.class))
                .choices()
                .getFirst()
                .message()
                .content()
                .replace("```json","").replace("```","");

        if (!mistralAIOutput.isEmpty()) {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(mistralAIOutput);
            String summary = rootNode.get("summary").asText();
            String content = rootNode.get("content").asText();
            return new FakeNewsArticle(summary, content);
        }
        return null;
    }
}
