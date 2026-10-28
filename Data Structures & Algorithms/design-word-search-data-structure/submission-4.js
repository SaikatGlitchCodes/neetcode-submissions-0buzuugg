class TreeNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode();
    }

    addWord(word) {
        let cur = this.root;

        for (const char of word) {
            const index = char.charCodeAt(0) - 97;

            if (!cur.children[index]) {
                cur.children[index] = new TreeNode();
            }

            cur = cur.children[index];
        }

        cur.word = true;
    }

    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, index, root) {
        let cur = root;

        for (let i = index; i < word.length; i++) {
            const char = word[i];

            if (char === '.') {
                for (const child of cur.children) {
                    if (child && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }

                return false;
            }

            const childIndex = char.charCodeAt(0) - 97;

            if (!cur.children[childIndex]) {
                return false;
            }

            cur = cur.children[childIndex];
        }

        return cur.word;
    }
}