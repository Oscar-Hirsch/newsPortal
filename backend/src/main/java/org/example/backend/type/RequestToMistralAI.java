package org.example.backend.type;
import java.util.List;

public record RequestToMistralAI(String model, List<MessageToMistralAI> messages) {
}
