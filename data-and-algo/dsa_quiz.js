#!/usr/bin/env node

/**
 * DSA Anki-Style Quiz System
 * Interactive command-line quiz for Data Structures and Algorithms
 * 
 * Features:
 * - Multiple question types (multiple choice, code completion, concept explanation)
 * - Spaced repetition algorithm
 * - Progress tracking
 * - Difficulty-based scoring
 * 
 * @author DSA Study Assistant
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

class DSAQuiz {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        this.score = 0;
        this.totalQuestions = 0;
        this.currentStreak = 0;
        this.bestStreak = 0;
        this.sessionStats = {
            correct: 0,
            incorrect: 0,
            topics: new Set()
        };
        
        // Load progress from file if exists
        this.progressFile = path.join(__dirname, 'quiz_progress.json');
        this.loadProgress();
        
        this.questionBank = this.initializeQuestionBank();
    }

    /**
     * Initialize comprehensive question bank based on study materials
     * @return {Array} Array of question objects
     */
    initializeQuestionBank() {
        return [
            // Arrays & Hash Maps
            {
                id: 'two_sum_concept',
                topic: 'Arrays & Hash',
                difficulty: 'easy',
                type: 'multiple_choice',
                question: 'What is the optimal time complexity for the Two Sum problem?',
                options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'],
                correct: 2,
                explanation: 'Using a hash map, we can solve Two Sum in O(n) time by storing complements and looking them up in O(1) time.',
                pattern: 'Hash Map + Complement Lookup'
            },
            {
                id: 'two_sum_implementation',
                topic: 'Arrays & Hash',
                difficulty: 'medium',
                type: 'code_completion',
                question: 'Complete the optimal Two Sum implementation:\n\nfunction twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (_______________) {\n            return [_____________, i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}',
                answer: 'map.has(complement), map.get(complement)',
                explanation: 'We check if the complement exists in our map, and if so, return the stored index and current index.'
            },
            {
                id: 'anagram_pattern',
                topic: 'Arrays & Hash',
                difficulty: 'easy',
                type: 'concept',
                question: 'What is the key insight for solving anagram problems efficiently?',
                keywords: ['frequency', 'count', 'characters', 'hash map', 'same'],
                explanation: 'Anagrams have the same character frequencies. We can use a hash map or array to count character occurrences and compare them.',
                pattern: 'Character Frequency Counting'
            },
            {
                id: 'anagram_complexity',
                topic: 'Arrays & Hash',
                difficulty: 'medium',
                type: 'multiple_choice',
                question: 'What are the time and space complexities of the hash map approach for Valid Anagram?',
                options: ['Time: O(n²), Space: O(1)', 'Time: O(n log n), Space: O(1)', 'Time: O(n), Space: O(k)', 'Time: O(n), Space: O(n²)'],
                correct: 2,
                explanation: 'Hash map approach takes O(n) time to process each character once, and O(k) space where k is the number of unique characters.',
                pattern: 'Character Frequency Counting'
            },
            
            // Two Pointers
            {
                id: 'two_pointers_when',
                topic: 'Two Pointers',
                difficulty: 'easy',
                type: 'concept',
                question: 'When should you consider using the two pointers technique?',
                keywords: ['sorted', 'array', 'opposite', 'ends', 'palindrome', 'target', 'sum'],
                explanation: 'Use two pointers when working with sorted arrays, finding pairs with target sum, palindrome checking, or when you need to process elements from opposite ends.',
                pattern: 'Two Pointers'
            },
            {
                id: 'palindrome_check',
                topic: 'Two Pointers',
                difficulty: 'easy',
                type: 'code_completion',
                question: 'Complete the palindrome check using two pointers:\n\nfunction isPalindrome(s) {\n    let left = 0, right = s.length - 1;\n    while (left < right) {\n        if (_______________) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}',
                answer: 's[left] !== s[right]',
                explanation: 'Compare characters at left and right pointers. If they differ, it\'s not a palindrome.'
            },

            // Sliding Window
            {
                id: 'sliding_window_pattern',
                topic: 'Sliding Window',
                difficulty: 'medium',
                type: 'concept',
                question: 'What problems are ideal candidates for the sliding window technique?',
                keywords: ['subarray', 'substring', 'contiguous', 'maximum', 'minimum', 'fixed', 'variable'],
                explanation: 'Sliding window is perfect for finding optimal subarrays/substrings, especially with fixed or variable window sizes, like longest substring without repeating characters.',
                pattern: 'Sliding Window'
            },

            // Stack
            {
                id: 'valid_parentheses',
                topic: 'Stack',
                difficulty: 'easy',
                type: 'multiple_choice',
                question: 'Why is a stack the ideal data structure for validating parentheses?',
                options: ['It\'s fast', 'LIFO matches nesting structure', 'It uses less memory', 'It\'s easier to implement'],
                correct: 1,
                explanation: 'Stack\'s Last-In-First-Out (LIFO) property perfectly matches the nesting structure of parentheses - the most recent opening bracket should be closed first.',
                pattern: 'Stack for Matching/Nesting'
            },

            // Binary Search
            {
                id: 'binary_search_complexity',
                topic: 'Binary Search',
                difficulty: 'easy',
                type: 'multiple_choice',
                question: 'What is the time complexity of binary search?',
                options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
                correct: 1,
                explanation: 'Binary search eliminates half the search space in each iteration, resulting in O(log n) time complexity.',
                pattern: 'Divide and Conquer'
            },
            {
                id: 'binary_search_requirement',
                topic: 'Binary Search',
                difficulty: 'easy',
                type: 'concept',
                question: 'What is the key requirement for applying binary search?',
                keywords: ['sorted', 'ordered', 'monotonic', 'array'],
                explanation: 'Binary search requires the data to be sorted or have some monotonic property that allows elimination of half the search space.',
                pattern: 'Binary Search'
            },

            // Linked Lists
            {
                id: 'linked_list_cycle',
                topic: 'Linked List',
                difficulty: 'medium',
                type: 'concept',
                question: 'How do you detect a cycle in a linked list efficiently?',
                keywords: ['floyd', 'tortoise', 'hare', 'slow', 'fast', 'two pointers'],
                explanation: 'Use Floyd\'s Cycle Detection (tortoise and hare) - two pointers moving at different speeds. If there\'s a cycle, they will eventually meet.',
                pattern: 'Floyd\'s Cycle Detection'
            },

            // Trees
            {
                id: 'tree_traversal',
                topic: 'Trees',
                difficulty: 'medium',
                type: 'multiple_choice',
                question: 'Which traversal visits nodes in the order: left subtree, root, right subtree?',
                options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'],
                correct: 1,
                explanation: 'Inorder traversal visits left subtree first, then root, then right subtree. For BSTs, this gives nodes in sorted order.',
                pattern: 'Tree Traversal'
            },
            {
                id: 'bst_property',
                topic: 'Trees',
                difficulty: 'easy',
                type: 'concept',
                question: 'What property makes a binary tree a Binary Search Tree (BST)?',
                keywords: ['left', 'smaller', 'right', 'greater', 'sorted', 'property'],
                explanation: 'In a BST, all nodes in the left subtree are smaller than the root, and all nodes in the right subtree are greater than the root.',
                pattern: 'BST Property'
            },

            // Dynamic Programming
            {
                id: 'dp_characteristics',
                topic: '1D Dynamic Programming',
                difficulty: 'hard',
                type: 'concept',
                question: 'What are the two key characteristics that make a problem suitable for dynamic programming?',
                keywords: ['optimal', 'substructure', 'overlapping', 'subproblems', 'memoization'],
                explanation: 'Dynamic Programming requires: 1) Optimal Substructure - optimal solution contains optimal solutions to subproblems, 2) Overlapping Subproblems - same subproblems are solved multiple times.',
                pattern: 'Dynamic Programming'
            },

            // Graphs
            {
                id: 'graph_traversal',
                topic: 'Graphs',
                difficulty: 'medium',
                type: 'multiple_choice',
                question: 'Which graph traversal algorithm is better for finding the shortest path in an unweighted graph?',
                options: ['DFS', 'BFS', 'Both are equal', 'Neither works'],
                correct: 1,
                explanation: 'BFS explores nodes level by level, guaranteeing the shortest path in unweighted graphs. DFS goes deep first and may not find the shortest path.',
                pattern: 'Graph Traversal'
            },

            // Advanced concepts
            {
                id: 'time_space_tradeoff',
                topic: 'General Concepts',
                difficulty: 'medium',
                type: 'concept',
                question: 'Explain the time-space tradeoff principle in algorithm design.',
                keywords: ['time', 'space', 'tradeoff', 'memory', 'speed', 'hash', 'memoization'],
                explanation: 'Often you can trade time for space or vice versa. Example: hash maps use extra space to achieve faster lookups, memoization uses space to avoid recomputation.',
                pattern: 'Time-Space Tradeoff'
            }
        ];
    }

    /**
     * Load progress from file
     */
    loadProgress() {
        try {
            if (fs.existsSync(this.progressFile)) {
                const data = fs.readFileSync(this.progressFile, 'utf8');
                const progress = JSON.parse(data);
                this.bestStreak = progress.bestStreak || 0;
            }
        } catch (error) {
            console.log('Starting fresh - no previous progress found.');
        }
    }

    /**
     * Save progress to file
     */
    saveProgress() {
        try {
            const progress = {
                bestStreak: this.bestStreak,
                lastSession: new Date().toISOString(),
                totalSessions: (this.loadedProgress?.totalSessions || 0) + 1
            };
            fs.writeFileSync(this.progressFile, JSON.stringify(progress, null, 2));
        } catch (error) {
            console.log('Could not save progress.');
        }
    }

    /**
     * Display welcome message and instructions
     */
    showWelcome() {
        console.clear();
        console.log('🚀 DSA ANKI-STYLE QUIZ SYSTEM 🚀');
        console.log('=====================================');
        console.log('');
        console.log('📚 Topics covered:');
        console.log('   • Arrays & Hash Maps    • Two Pointers');
        console.log('   • Sliding Window        • Stack');
        console.log('   • Binary Search         • Linked Lists');
        console.log('   • Trees                 • Dynamic Programming');
        console.log('   • Graphs                • General Concepts');
        console.log('');
        console.log('🎯 Question types:');
        console.log('   • Multiple Choice       • Code Completion');
        console.log('   • Concept Explanation   • Pattern Recognition');
        console.log('');
        console.log('📊 Your stats:');
        console.log(`   • Best streak: ${this.bestStreak} questions`);
        console.log('');
        console.log('💡 Commands during quiz:');
        console.log('   • Type "quit" to exit');
        console.log('   • Type "stats" to see current session stats');
        console.log('   • Type "hint" for a hint (if available)');
        console.log('');
        console.log('Press Enter to start your quiz session...');
    }

    /**
     * Get a random question based on spaced repetition
     * @return {Object} Selected question
     */
    selectQuestion() {
        // Simple random selection for now
        // TODO: Implement proper spaced repetition algorithm
        const randomIndex = Math.floor(Math.random() * this.questionBank.length);
        return this.questionBank[randomIndex];
    }

    /**
     * Ask a multiple choice question
     * @param {Object} question - Question object
     * @return {Promise<boolean>} Whether answer was correct
     */
    async askMultipleChoice(question) {
        console.log(`\n📝 ${question.topic} - ${question.difficulty.toUpperCase()}`);
        console.log(`\n${question.question}\n`);
        
        question.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
        
        const answer = await this.getUserInput('\nYour answer (1-4): ');
        
        if (answer.toLowerCase() === 'quit') return null;
        if (answer.toLowerCase() === 'stats') {
            this.showStats();
            return this.askMultipleChoice(question);
        }
        
        const userChoice = parseInt(answer) - 1;
        const isCorrect = userChoice === question.correct;
        
        if (isCorrect) {
            console.log('\n✅ Correct!');
            this.currentStreak++;
        } else {
            console.log(`\n❌ Incorrect. The correct answer was: ${question.options[question.correct]}`);
            this.currentStreak = 0;
        }
        
        console.log(`\n💡 Explanation: ${question.explanation}`);
        if (question.pattern) {
            console.log(`🔍 Pattern: ${question.pattern}`);
        }
        
        return isCorrect;
    }

    /**
     * Ask a code completion question
     * @param {Object} question - Question object
     * @return {Promise<boolean>} Whether answer was correct
     */
    async askCodeCompletion(question) {
        console.log(`\n💻 ${question.topic} - ${question.difficulty.toUpperCase()}`);
        console.log(`\n${question.question}\n`);
        
        const answer = await this.getUserInput('Complete the missing parts: ');
        
        if (answer.toLowerCase() === 'quit') return null;
        if (answer.toLowerCase() === 'stats') {
            this.showStats();
            return this.askCodeCompletion(question);
        }
        
        // Simple keyword matching for code completion
        const userAnswer = answer.toLowerCase().trim();
        const correctAnswer = question.answer.toLowerCase();
        
        const isCorrect = correctAnswer.split(',').every(part => 
            userAnswer.includes(part.trim())
        );
        
        if (isCorrect) {
            console.log('\n✅ Correct!');
            this.currentStreak++;
        } else {
            console.log(`\n❌ Incorrect. The correct answer was: ${question.answer}`);
            this.currentStreak = 0;
        }
        
        console.log(`\n💡 Explanation: ${question.explanation}`);
        
        return isCorrect;
    }

    /**
     * Ask a concept explanation question
     * @param {Object} question - Question object
     * @return {Promise<boolean>} Whether answer was correct
     */
    async askConcept(question) {
        console.log(`\n🤔 ${question.topic} - ${question.difficulty.toUpperCase()}`);
        console.log(`\n${question.question}\n`);
        
        const answer = await this.getUserInput('Your explanation: ');
        
        if (answer.toLowerCase() === 'quit') return null;
        if (answer.toLowerCase() === 'stats') {
            this.showStats();
            return this.askConcept(question);
        }
        
        // Check if answer contains key concepts
        const userAnswer = answer.toLowerCase();
        const keywordMatches = question.keywords.filter(keyword => 
            userAnswer.includes(keyword.toLowerCase())
        );
        
        const isCorrect = keywordMatches.length >= Math.ceil(question.keywords.length * 0.6);
        
        if (isCorrect) {
            console.log('\n✅ Good explanation!');
            this.currentStreak++;
        } else {
            console.log('\n📚 Here\'s a more complete explanation:');
            this.currentStreak = 0;
        }
        
        console.log(`\n💡 Key concepts: ${question.explanation}`);
        if (question.pattern) {
            console.log(`🔍 Pattern: ${question.pattern}`);
        }
        
        return isCorrect;
    }

    /**
     * Ask a question based on its type
     * @param {Object} question - Question object
     * @return {Promise<boolean>} Whether answer was correct
     */
    async askQuestion(question) {
        this.sessionStats.topics.add(question.topic);
        
        switch (question.type) {
            case 'multiple_choice':
                return await this.askMultipleChoice(question);
            case 'code_completion':
                return await this.askCodeCompletion(question);
            case 'concept':
                return await this.askConcept(question);
            default:
                console.log('Unknown question type');
                return false;
        }
    }

    /**
     * Show current session statistics
     */
    showStats() {
        console.log('\n📊 SESSION STATS');
        console.log('================');
        console.log(`Correct answers: ${this.sessionStats.correct}`);
        console.log(`Incorrect answers: ${this.sessionStats.incorrect}`);
        console.log(`Current streak: ${this.currentStreak}`);
        console.log(`Best streak: ${this.bestStreak}`);
        console.log(`Topics covered: ${Array.from(this.sessionStats.topics).join(', ')}`);
        if (this.totalQuestions > 0) {
            const accuracy = (this.sessionStats.correct / this.totalQuestions * 100).toFixed(1);
            console.log(`Accuracy: ${accuracy}%`);
        }
        console.log('');
    }

    /**
     * Get user input with promise
     * @param {string} prompt - Prompt message
     * @return {Promise<string>} User input
     */
    getUserInput(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }

    /**
     * Main quiz loop
     */
    async startQuiz() {
        this.showWelcome();
        await this.getUserInput('');
        
        console.log('\n🎯 Starting your DSA quiz session!\n');
        
        while (true) {
            const question = this.selectQuestion();
            const result = await this.askQuestion(question);
            
            // Handle quit command
            if (result === null) {
                break;
            }
            
            this.totalQuestions++;
            
            if (result) {
                this.sessionStats.correct++;
                this.score++;
                
                // Update best streak
                if (this.currentStreak > this.bestStreak) {
                    this.bestStreak = this.currentStreak;
                    console.log(`\n🎉 New best streak: ${this.bestStreak}!`);
                }
            } else {
                this.sessionStats.incorrect++;
            }
            
            console.log(`\nStreak: ${this.currentStreak} | Score: ${this.score}/${this.totalQuestions}`);
            
            const continueQuiz = await this.getUserInput('\nPress Enter for next question, or type "quit" to exit: ');
            if (continueQuiz.toLowerCase() === 'quit') {
                break;
            }
            if (continueQuiz.toLowerCase() === 'stats') {
                this.showStats();
            }
        }
        
        this.endQuiz();
    }

    /**
     * End quiz and show final results
     */
    endQuiz() {
        console.log('\n🎊 QUIZ SESSION COMPLETE! 🎊');
        console.log('============================');
        
        this.showStats();
        
        if (this.totalQuestions > 0) {
            const accuracy = (this.sessionStats.correct / this.totalQuestions * 100).toFixed(1);
            console.log(`\n🏆 Final Results:`);
            console.log(`   Score: ${this.score}/${this.totalQuestions} (${accuracy}%)`);
            console.log(`   Best streak this session: ${this.currentStreak}`);
            console.log(`   All-time best streak: ${this.bestStreak}`);
        }
        
        console.log('\n💪 Keep practicing! Consistency is key to mastering DSA.');
        console.log('📚 Review the explanations and patterns you saw today.');
        
        this.saveProgress();
        this.rl.close();
    }
}

// Start the quiz if this file is run directly
if (require.main === module) {
    const quiz = new DSAQuiz();
    quiz.startQuiz().catch(console.error);
}

module.exports = DSAQuiz;
