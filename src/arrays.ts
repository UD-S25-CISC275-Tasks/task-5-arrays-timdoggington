/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else {
        const first_last: number[] = [numbers[0], numbers[numbers.length - 1]];
        return first_last;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((string: string) =>
        isNaN(Number(string)) ? 0 : Number(string),
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((string: string) =>
        string[0] === "$" && isNaN(Number(string.slice(1))) ? 0
        : string[0] === "$" ? Number(string.slice(1))
        : isNaN(Number(string)) ? 0
        : Number(string),
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const no_questions = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    return no_questions.map((message: string) =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short_words: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return short_words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const rgb: boolean = colors.some(
        (color: string): boolean =>
            color != "red" && color != "green" && color != "blue",
    );
    return !rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum: number = addends.reduce(
        (curr_total: number, num: number) => curr_total + num,
        0,
    );

    const summation: string =
        addends[0].toString() +
        addends
            .slice(1)
            .reduce(
                (curr_string: string, num: number) =>
                    curr_string + "+" + num.toString(),
                "",
            );
    return sum.toString() + "=" + summation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negatives: boolean = values.some(
        (value: number): boolean => value < 0,
    );
    if (negatives) {
        const firstNegativeIndex = values.findIndex(
            (num: number): boolean => num < 0,
        );
        const sumBeforeNegative = values
            .slice(0, firstNegativeIndex)
            .reduce((curr_total, num) => curr_total + num, 0);
        return [
            ...values.slice(0, firstNegativeIndex + 1), // Keep numbers up to the first negative
            sumBeforeNegative, // Insert the computed sum
            ...values.slice(firstNegativeIndex + 1), // Add remaining numbers
        ];
    } else {
        const sum: number = values.reduce(
            (curr_total: number, num: number) => curr_total + num,
            0,
        );
        return [...values, sum];
    }
}
