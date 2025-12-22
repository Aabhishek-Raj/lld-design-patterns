package patternsdesign.momento;

import java.util.ArrayList;
import java.util.List;

public class History {
    private List<EditorState> statesHistory = new ArrayList<>();

    public void push(EditorState state) {
        statesHistory.add(state);
    }

    public EditorState pop() {
        var lastIndex = statesHistory.size() - 1;
        var lastState = statesHistory.get(lastIndex);
        statesHistory.remove(lastState);
        
        return lastState;
    }
}
