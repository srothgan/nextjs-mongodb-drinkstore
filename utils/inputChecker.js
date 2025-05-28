export function isInputSafe(input) {
    // Patterns to check
    const patterns = [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // Script tags
        /(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE)?|INSERT( INTO)?|MERGE|SELECT|UPDATE|UNION( ALL)?|USE)\b|--|;)/gi, // SQL keywords and comment/semicolon
        /<[^>]+>/gi, // HTML tags
        /&(?:lt|gt|quot|amp|apos);/gi, // HTML entities
        /\b(eval|alert|prompt|console\.log|document\.write|window\.location|window\.open)\b/gi, // JavaScript functions commonly used in XSS
        /\b(exec|system|sh|bash|cmd|powershell|nc|netcat|wget|curl)\b/gi, // Command injection
        /['";]/g, // Special characters
        /(\b(and|or)\b.+?[=<>])/gi, // SQL logical operators
        /\.\.\//g, // Directory traversal
        /(%0d%0a|%0a|%0d)/gi, // Newline characters often used in HTTP Header Injection
        /(\bunion\b.+?\bselect\b)/gi // SQL Injection using UNION SELECT
    ];

    // Test the input against all patterns
    for (const pattern of patterns) {
        if (pattern.test(input)) {
            return false;
        }
    }

    return true;
}