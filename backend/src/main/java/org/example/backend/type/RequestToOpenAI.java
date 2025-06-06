package org.example.backend.type;
import java.util.List;

public record RequestToOpenAI(String model, List<MessageToOpenAI> messages) {
}
