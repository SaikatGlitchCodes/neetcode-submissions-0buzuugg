class TreeNode {
    constructor() {
        // character -> TreeNode
        this.children = new Map();

        // true if a complete word ends here
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

        for (const char of word) {

            // If this path doesn't exist, create it
            if (!cur.children.has(char)) {
                cur.children.set(char, new TreeNode());
            }

            // Move to that child node
            cur = cur.children.get(char);
        }

        // Complete word ends here
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, index, root) {
        let cur = root;

        for (let i = index; i < word.length; i++) {
            const char = word[i];

            // "." can represent ANY character
            if (char === '.') {
                // Try every possible child
                for (const child of cur.children.values()) {
                    if (this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }

                return false;
            }

            // Normal character doesn't exist
            if (!cur.children.has(char)) {
                return false;
            }

            // Move down the Trie
            cur = cur.children.get(char);
        }

        // We consumed the whole search string.
        // It must be a COMPLETE word.
        return cur.word;
    }
}