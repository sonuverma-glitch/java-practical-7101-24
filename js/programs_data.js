const practicalData = [
  {
    "id": "sec1",
    "title": "1. Single Dimension Arrays",
    "programs": [
      [
        "Program to copy all elements of one array into another array",
        "public class CopyArray {\n    public static void main(String[] args) {\n        int[] arr1 = {10, 20, 30, 40, 50};\n        int[] arr2 = new int[arr1.length];\n        for (int i = 0; i < arr1.length; i++) arr2[i] = arr1[i];\n        System.out.print(\"Copied Array: \");\n        for (int x : arr2) System.out.print(x + \" \");\n    }\n}",
        "Copied Array: 10 20 30 40 50"
      ],
      [
        "Program to find the frequency of each element in the array",
        "import java.util.HashMap;\npublic class FrequencyArray {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 8, 3, 2, 2, 2, 5, 1};\n        HashMap<Integer, Integer> freq = new HashMap<>();\n        for (int x : arr) freq.put(x, freq.getOrDefault(x, 0) + 1);\n        freq.forEach((k, v) -> System.out.println(k + \" -> \" + v + \" times\"));\n    }\n}",
        "1 -> 2 times\n2 -> 4 times\n3 -> 1 times\n5 -> 1 times\n8 -> 1 times"
      ],
      [
        "Program to left rotate the elements of an array",
        "public class LeftRotate {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int first = arr[0];\n        for (int i = 0; i < arr.length - 1; i++) arr[i] = arr[i + 1];\n        arr[arr.length - 1] = first;\n        for (int x : arr) System.out.print(x + \" \");\n    }\n}",
        "2 3 4 5 1"
      ],
      [
        "Program to print the duplicate elements of an array",
        "public class DuplicateElements {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 2, 7, 8, 8, 3};\n        System.out.print(\"Duplicate elements: \");\n        for (int i = 0; i < arr.length; i++)\n            for (int j = i + 1; j < arr.length; j++)\n                if (arr[i] == arr[j]) System.out.print(arr[i] + \" \");\n    }\n}",
        "Duplicate elements: 2 3 8 "
      ],
      [
        "Program to print the elements of an array",
        "public class PrintArray {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40, 50};\n        System.out.print(\"Array elements: \");\n        for (int x : arr) System.out.print(x + \" \");\n    }\n}",
        "Array elements: 10 20 30 40 50"
      ],
      [
        "Program to print the elements of an array in reverse order",
        "public class ReverseArray {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        System.out.print(\"Reverse order: \");\n        for (int i = arr.length - 1; i >= 0; i--) System.out.print(arr[i] + \" \");\n    }\n}",
        "Reverse order: 5 4 3 2 1"
      ],
      [
        "Program to print the elements of an array present on even position",
        "public class EvenPos {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40, 50, 60};\n        System.out.print(\"Even pos elements: \");\n        for (int i = 1; i < arr.length; i += 2) System.out.print(arr[i] + \" \");\n    }\n}",
        "Even pos elements: 20 40 60"
      ],
      [
        "Program to print the elements of an array present on odd position",
        "public class OddPos {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40, 50, 60};\n        System.out.print(\"Odd pos elements: \");\n        for (int i = 0; i < arr.length; i += 2) System.out.print(arr[i] + \" \");\n    }\n}",
        "Odd pos elements: 10 30 50"
      ],
      [
        "Program to print the largest element in an array",
        "public class LargestElement {\n    public static void main(String[] args) {\n        int[] arr = {25, 11, 7, 75, 56};\n        int max = arr[0];\n        for (int x : arr) if (x > max) max = x;\n        System.out.println(\"Largest element: \" + max);\n    }\n}",
        "Largest element: 75"
      ],
      [
        "Program to print the smallest element in an array",
        "public class SmallestElement {\n    public static void main(String[] args) {\n        int[] arr = {25, 11, 7, 75, 56};\n        int min = arr[0];\n        for (int x : arr) if (x < min) min = x;\n        System.out.println(\"Smallest element: \" + min);\n    }\n}",
        "Smallest element: 7"
      ],
      [
        "Program to print the number of elements present in an array",
        "public class CountElements {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5, 6, 7};\n        System.out.println(\"Total elements: \" + arr.length);\n    }\n}",
        "Total elements: 7"
      ],
      [
        "Program to print the sum of all the items of the array",
        "public class SumArray {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int x : arr) sum += x;\n        System.out.println(\"Sum of items: \" + sum);\n    }\n}",
        "Sum of items: 15"
      ],
      [
        "Program to right rotate the elements of an array",
        "public class RightRotate {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int last = arr[arr.length - 1];\n        for (int i = arr.length - 1; i > 0; i--) arr[i] = arr[i - 1];\n        arr[0] = last;\n        for (int x : arr) System.out.print(x + \" \");\n    }\n}",
        "5 1 2 3 4"
      ],
      [
        "Program to sort the elements of an array in ascending order",
        "import java.util.Arrays;\npublic class SortAscending {\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 8, 7, 1};\n        Arrays.sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}",
        "[1, 2, 5, 7, 8]"
      ],
      [
        "Program to sort the elements of an array in descending order",
        "import java.util.Arrays;\nimport java.util.Collections;\npublic class SortDescending {\n    public static void main(String[] args) {\n        Integer[] arr = {5, 2, 8, 7, 1};\n        Arrays.sort(arr, Collections.reverseOrder());\n        System.out.println(Arrays.toString(arr));\n    }\n}",
        "[8, 7, 5, 2, 1]"
      ],
      [
        "Program to find 3rd largest number in an array",
        "import java.util.Arrays;\npublic class ThirdLargest {\n    public static void main(String[] args) {\n        int[] arr = {10, 59, 23, 76, 45, 90};\n        Arrays.sort(arr);\n        System.out.println(\"3rd Largest: \" + arr[arr.length - 3]);\n    }\n}",
        "3rd Largest: 59"
      ],
      [
        "Program to find 2nd largest number in an array",
        "import java.util.Arrays;\npublic class SecondLargest {\n    public static void main(String[] args) {\n        int[] arr = {10, 59, 23, 76, 45, 90};\n        Arrays.sort(arr);\n        System.out.println(\"2nd Largest: \" + arr[arr.length - 2]);\n    }\n}",
        "2nd Largest: 76"
      ],
      [
        "Program to find largest number in an array",
        "public class MaxNum {\n    public static void main(String[] args) {\n        int[] arr = {14, 52, 98, 33};\n        int max = arr[0];\n        for (int x : arr) if (x > max) max = x;\n        System.out.println(\"Max: \" + max);\n    }\n}",
        "Max: 98"
      ],
      [
        "Program to find 2nd smallest number in an array",
        "import java.util.Arrays;\npublic class SecondSmallest {\n    public static void main(String[] args) {\n        int[] arr = {12, 45, 2, 8, 90};\n        Arrays.sort(arr);\n        System.out.println(\"2nd Smallest: \" + arr[1]);\n    }\n}",
        "2nd Smallest: 8"
      ],
      [
        "Program to find smallest number in an array",
        "public class MinNum {\n    public static void main(String[] args) {\n        int[] arr = {45, 12, 85, 3};\n        int min = arr[0];\n        for (int x : arr) if (x < min) min = x;\n        System.out.println(\"Min: \" + min);\n    }\n}",
        "Min: 3"
      ],
      [
        "Program to remove duplicate element in an array",
        "import java.util.LinkedHashSet;\npublic class RemoveDuplicates {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 20, 30, 40, 40, 50};\n        LinkedHashSet<Integer> set = new LinkedHashSet<>();\n        for (int x : arr) set.add(x);\n        System.out.println(set);\n    }\n}",
        "[10, 20, 30, 40, 50]"
      ],
      [
        "Program to print odd and even numbers from an array",
        "public class OddEvenNumbers {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 5, 6, 3, 8};\n        System.out.print(\"Odd: \");\n        for (int x : arr) if (x % 2 != 0) System.out.print(x + \" \");\n        System.out.print(\"\\nEven: \");\n        for (int x : arr) if (x % 2 == 0) System.out.print(x + \" \");\n    }\n}",
        "Odd: 1 5 3 \nEven: 2 6 8"
      ],
      [
        "How to sort an array in Java",
        "import java.util.Arrays;\npublic class HowToSort {\n    public static void main(String[] args) {\n        int[] arr = {64, 34, 25, 12, 22};\n        Arrays.sort(arr);\n        System.out.println(\"Sorted array: \" + Arrays.toString(arr));\n    }\n}",
        "Sorted array: [12, 22, 25, 34, 64]"
      ]
    ]
  },
  {
    "id": "sec2",
    "title": "2. Functions (Methods)",
    "programs": [
      [
        "Write a Java method to find the smallest number among three numbers.",
        "public class SmallestOfThree {\n    public static double smallest(double a, double b, double c) {\n        return Math.min(a, Math.min(b, c));\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest: \" + smallest(25, 37, 29));\n    }\n}",
        "Smallest: 25.0"
      ],
      [
        "Write a Java method to compute the average of three numbers.",
        "public class AverageThree {\n    public static double average(double a, double b, double c) {\n        return (a + b + c) / 3;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Average: \" + average(25, 45, 65));\n    }\n}",
        "Average: 45.0"
      ],
      [
        "Write a Java method to display the middle character of a string.",
        "public class MiddleChar {\n    public static String middle(String s) {\n        int l = s.length(), mid = l / 2;\n        return (l % 2 == 0) ? s.substring(mid - 1, mid + 1) : String.valueOf(s.charAt(mid));\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Middle: \" + middle(\"350\"));\n    }\n}",
        "Middle: 5"
      ],
      [
        "Write a Java method to count all the words in a string.",
        "public class WordCount {\n    public static int countWords(String s) {\n        return s.trim().split(\"\\\\s+\").length;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Words: \" + countWords(\"Java practical BCA 5th sem\"));\n    }\n}",
        "Words: 5"
      ],
      [
        "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",
        "public class FutureValue {\n    public static double calc(double inv, double rate, int years) {\n        return inv * Math.pow(1 + rate / 100, years);\n    }\n    public static void main(String[] args) {\n        System.out.printf(\"Future value: %.2f\\n\", calc(1000, 10, 3));\n    }\n}",
        "Future value: 1331.00"
      ],
      [
        "Write a Java method to print characters between two characters (i.e. A to P).",
        "public class PrintBetween {\n    public static void print(char c1, char c2) {\n        for (char c = c1; c <= c2; c++) System.out.print(c + \" \");\n    }\n    public static void main(String[] args) {\n        print('A', 'P');\n    }\n}",
        "A B C D E F G H I J K L M N O P "
      ],
      [
        "Write a Java method to check whether a string is a valid password.",
        "public class PasswordCheck {\n    public static boolean isValid(String p) {\n        return p.length() >= 8 && p.matches(\".*[0-9].*\") && p.matches(\".*[A-Za-z].*\");\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Pass1234: \" + isValid(\"Pass1234\"));\n    }\n}",
        "Pass1234: true"
      ],
      [
        "Write a Java method to display the current date and time.",
        "import java.time.LocalDateTime;\npublic class ShowDate {\n    public static void show() {\n        System.out.println(\"Current: \" + LocalDateTime.now());\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}",
        "Current: 2026-10-29T10:50:00"
      ],
      [
        "Write a Java method to find all twin prime numbers less than 100.",
        "public class TwinPrimes {\n    public static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n        return true;\n    }\n    public static void main(String[] args) {\n        for (int i = 2; i < 98; i++) {\n            if (isPrime(i) && isPrime(i + 2))\n                System.out.print(\"(\" + i + \",\" + (i + 2) + \") \");\n        }\n    }\n}",
        "(3,5) (5,7) (11,13) (17,19) (29,31) (41,43) (59,61) (71,73) "
      ],
      [
        "Write a Java method to count the number of digits in an integer with the value 2.",
        "public class CountTwo {\n    public static int count(int n) {\n        int c = 0;\n        while (n > 0) { if (n % 10 == 2) c++; n /= 10; }\n        return c;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Count of 2s in 24202: \" + count(24202));\n    }\n}",
        "Count of 2s in 24202: 3"
      ],
      [
        "Write a Java method that accepts three integers and checks whether they are consecutive or not.",
        "import java.util.Arrays;\npublic class Consecutive {\n    public static boolean check(int a, int b, int c) {\n        int[] x = {a, b, c};\n        Arrays.sort(x);\n        return (x[0] + 1 == x[1]) && (x[1] + 1 == x[2]);\n    }\n    public static void main(String[] args) {\n        System.out.println(\"15, 16, 17: \" + check(15, 16, 17));\n    }\n}",
        "15, 16, 17: true"
      ],
      [
        "Write a Java method that accepts three integers and returns true if one is the middle point between the other two.",
        "public class MidPoint {\n    public static boolean isMid(int a, int b, int c) {\n        return (a + b == 2 * c) || (a + c == 2 * b) || (b + c == 2 * a);\n    }\n    public static void main(String[] args) {\n        System.out.println(\"2, 4, 6: \" + isMid(2, 4, 6));\n    }\n}",
        "2, 4, 6: true"
      ],
      [
        "Write a Java method that checks whether all characters in a given string are vowels.",
        "public class AllVowels {\n    public static boolean areVowels(String s) {\n        return s.toLowerCase().matches(\"[aeiou]+\");\n    }\n    public static void main(String[] args) {\n        System.out.println(\"'aei': \" + areVowels(\"aei\"));\n    }\n}",
        "'aei': true"
      ]
    ]
  },
  {
    "id": "sec3",
    "title": "3. Strings",
    "programs": [
      [
        "Program to Check if a String contains only digits?",
        "public class OnlyDigits {\n    public static void main(String[] args) {\n        String s = \"24050304\";\n        System.out.println(s + \" contains only digits? \" + s.matches(\"\\\\d+\"));\n    }\n}",
        "24050304 contains only digits? true"
      ],
      [
        "Program to perform Deep Copy for String?",
        "public class StringCopy {\n    public static void main(String[] args) {\n        String original = \"Panjab University\";\n        String copy = new String(original);\n        System.out.println(\"Original: \" + original + \", Copy: \" + copy);\n    }\n}",
        "Original: Panjab University, Copy: Panjab University"
      ],
      [
        "Program to prove String is immutable programmatically?",
        "public class StringImmutable {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        s.concat(\" World\");\n        System.out.println(\"String after concat without assignment: \" + s);\n    }\n}",
        "String after concat without assignment: Hello"
      ],
      [
        "Program to remove all occurrences of a given character from input String?",
        "public class RemoveChar {\n    public static void main(String[] args) {\n        String s = \"programming in java\";\n        System.out.println(s.replace(\"a\", \"\"));\n    }\n}",
        "progrmming in jv"
      ],
      [
        "Program to append the string using StringBuffer class",
        "public class StringBufferAppend {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        sb.append(\" BCA Class\");\n        System.out.println(sb);\n    }\n}",
        "Hello BCA Class"
      ],
      [
        "Program to insert the string using StringBuffer class",
        "public class StringBufferInsert {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Java 5th Sem\");\n        sb.insert(5, \"BCA \");\n        System.out.println(sb);\n    }\n}",
        "Java BCA 5th Sem"
      ],
      [
        "Program to Add Characters to a String",
        "public class AddChars {\n    public static void main(String[] args) {\n        String s = \"Practical\";\n        s += \" Exam\";\n        System.out.println(s);\n    }\n}",
        "Practical Exam"
      ],
      [
        "Program to Check Anagram",
        "import java.util.Arrays;\npublic class AnagramCheck {\n    public static void main(String[] args) {\n        char[] a = \"silent\".toCharArray();\n        char[] b = \"listen\".toCharArray();\n        Arrays.sort(a); Arrays.sort(b);\n        System.out.println(\"Anagram? \" + Arrays.equals(a, b));\n    }\n}",
        "Anagram? true"
      ],
      [
        "Program to check whether a string is a Palindrome",
        "public class PalindromeStr {\n    public static void main(String[] args) {\n        String s = \"madam\";\n        String rev = new StringBuilder(s).reverse().toString();\n        System.out.println(s + \" is palindrome: \" + s.equalsIgnoreCase(rev));\n    }\n}",
        "madam is palindrome: true"
      ],
      [
        "Program to Convert Enum to String",
        "enum Day { MONDAY, FRIDAY }\npublic class EnumToString {\n    public static void main(String[] args) {\n        Day d = Day.MONDAY;\n        System.out.println(\"Enum name: \" + d.name());\n    }\n}",
        "Enum name: MONDAY"
      ],
      [
        "Program to Convert String to String Array",
        "import java.util.Arrays;\npublic class StringToArray {\n    public static void main(String[] args) {\n        String s = \"Java,Python,C++,SQL\";\n        String[] arr = s.split(\",\");\n        System.out.println(Arrays.toString(arr));\n    }\n}",
        "[Java, Python, C++, SQL]"
      ],
      [
        "Program to count number of words in a String?",
        "public class WordsCount {\n    public static void main(String[] args) {\n        String s = \"Panjab University Chandigarh\";\n        System.out.println(\"Word count: \" + s.trim().split(\"\\\\s+\").length);\n    }\n}",
        "Word count: 3"
      ],
      [
        "Program to count the total number of characters in a string",
        "public class CharCount {\n    public static void main(String[] args) {\n        String s = \"Sonu Verma\";\n        System.out.println(\"Total chars: \" + s.length());\n    }\n}",
        "Total chars: 10"
      ],
      [
        "Program to count the total number of punctuation characters in a String",
        "public class PunctuationCount {\n    public static void main(String[] args) {\n        String s = \"Hello, world! Welcome to Java.\";\n        int count = 0;\n        for (char c : s.toCharArray()) if (\",.!?;:'\"\".indexOf(c) != -1) count++;\n        System.out.println(\"Punctuation count: \" + count);\n    }\n}",
        "Punctuation count: 3"
      ],
      [
        "Program to count the total number of vowels and consonants in a string",
        "public class VowelsConsonants {\n    public static void main(String[] args) {\n        String s = \"education\";\n        int v = 0, c = 0;\n        for (char ch : s.toLowerCase().toCharArray()) {\n            if (\"aeiou\".indexOf(ch) != -1) v++; else if (Character.isLetter(ch)) c++;\n        }\n        System.out.println(\"Vowels: \" + v + \", Consonants: \" + c);\n    }\n}",
        "Vowels: 5, Consonants: 4"
      ],
      [
        "Program to determine whether one string is a rotation of another",
        "public class StringRotation {\n    public static void main(String[] args) {\n        String s1 = \"ABCD\", s2 = \"CDAB\";\n        boolean rot = (s1.length() == s2.length()) && (s1 + s1).contains(s2);\n        System.out.println(\"Is rotation? \" + rot);\n    }\n}",
        "Is rotation? true"
      ],
      [
        "Program to divide a string in 'N' equal parts",
        "public class DivideString {\n    public static void main(String[] args) {\n        String s = \"abcdefgh\";\n        int n = 4, part = s.length() / n;\n        for (int i = 0; i < s.length(); i += part) System.out.println(s.substring(i, i + part));\n    }\n}",
        "ab\ncd\nef\ngh"
      ],
      [
        "Program to find all subsets of a string",
        "public class SubsetsString {\n    public static void main(String[] args) {\n        String s = \"FUN\";\n        for (int i = 0; i < s.length(); i++)\n            for (int j = i + 1; j <= s.length(); j++)\n                System.out.print(s.substring(i, j) + \" \");\n    }\n}",
        "F FU FUN U UN N "
      ],
      [
        "Program to find Reverse of the string",
        "public class RevString {\n    public static void main(String[] args) {\n        String s = \"Computer\";\n        System.out.println(new StringBuilder(s).reverse());\n    }\n}",
        "retupmoC"
      ],
      [
        "Program to find the duplicate characters in a string",
        "public class DuplicateChars {\n    public static void main(String[] args) {\n        String s = \"programming\";\n        for (int i = 0; i < s.length(); i++)\n            for (int j = i + 1; j < s.length(); j++)\n                if (s.charAt(i) == s.charAt(j)) { System.out.print(s.charAt(i) + \" \"); break; }\n    }\n}",
        "r g m "
      ],
      [
        "Program to find the frequency of characters",
        "public class CharFrequency {\n    public static void main(String[] args) {\n        String s = \"apple\";\n        int[] f = new int[256];\n        for (char c : s.toCharArray()) f[c]++;\n        for (int i = 0; i < 256; i++) if (f[i] > 0) System.out.println((char)i + \": \" + f[i]);\n    }\n}",
        "a: 1\ne: 1\nl: 1\np: 2"
      ],
      [
        "Program to Get a Character From the Given String",
        "public class GetChar {\n    public static void main(String[] args) {\n        String s = \"Chandigarh\";\n        System.out.println(\"Char at 4: \" + s.charAt(4));\n    }\n}",
        "Char at 4: d"
      ],
      [
        "Program to Insert a string into another string",
        "public class InsertString {\n    public static void main(String[] args) {\n        String original = \"GeeksGeeks\";\n        String inserted = original.substring(0, 5) + \"For\" + original.substring(5);\n        System.out.println(inserted);\n    }\n}",
        "GeeksForGeeks"
      ],
      [
        "Program to Iterate Over Characters in String",
        "public class IterateChars {\n    public static void main(String[] args) {\n        String s = \"JAVA\";\n        for (char c : s.toCharArray()) System.out.print(c + \"-\\t\");\n    }\n}",
        "J-\tA-\tV-\tA-\t"
      ],
      [
        "Program to Print even length words",
        "public class EvenLengthWords {\n    public static void main(String[] args) {\n        String s = \"This is a java test file\";\n        for (String w : s.split(\" \")) if (w.length() % 2 == 0) System.out.print(w + \" \");\n    }\n}",
        "This is java test "
      ],
      [
        "Program to remove all the white spaces from a string",
        "public class RemoveSpaces {\n    public static void main(String[] args) {\n        String s = \"  Java   BCA  Practical  \";\n        System.out.println(s.replaceAll(\"\\\\s+\", \"\"));\n    }\n}",
        "JavaBCAPractical"
      ],
      [
        "Program to replace lower-case characters with upper-case and vice-versa",
        "public class ToggleCase {\n    public static void main(String[] args) {\n        String s = \"Sonu Verma 5th Sem\";\n        StringBuilder sb = new StringBuilder();\n        for (char c : s.toCharArray()) {\n            if (Character.isUpperCase(c)) sb.append(Character.toLowerCase(c));\n            else if (Character.isLowerCase(c)) sb.append(Character.toUpperCase(c));\n            else sb.append(c);\n        }\n        System.out.println(sb);\n    }\n}",
        "sONU vERMA 5TH sEM"
      ],
      [
        "Program to replace the spaces of a string with a specific character",
        "public class ReplaceSpaces {\n    public static void main(String[] args) {\n        String s = \"Punjab University Chandigarh\";\n        System.out.println(s.replace(' ', '_'));\n    }\n}",
        "Punjab_University_Chandigarh"
      ],
      [
        "Program to separate the Individual Characters from a String",
        "public class SeparateChars {\n    public static void main(String[] args) {\n        String s = \"BCA\";\n        for (int i = 0; i < s.length(); i++) System.out.println(\"Char \" + i + \": \" + s.charAt(i));\n    }\n}",
        "Char 0: B\nChar 1: C\nChar 2: A"
      ],
      [
        "Program to swap two string variables without using third variable",
        "public class SwapStrings {\n    public static void main(String[] args) {\n        String a = \"First\", b = \"Second\";\n        a = a + b;\n        b = a.substring(0, a.length() - b.length());\n        a = a.substring(b.length());\n        System.out.println(\"a: \" + a + \", b: \" + b);\n    }\n}",
        "a: Second, b: First"
      ],
      [
        "Reverse String without reverse() function",
        "public class RevNoMethod {\n    public static void main(String[] args) {\n        String s = \"Panjab\", rev = \"\";\n        for (int i = s.length() - 1; i >= 0; i--) rev += s.charAt(i);\n        System.out.println(rev);\n    }\n}",
        "bajnaP"
      ],
      [
        "Reverse String Word by Word",
        "public class RevWords {\n    public static void main(String[] args) {\n        String s = \"Java Practical Record BCA\";\n        String[] w = s.split(\" \");\n        for (int i = w.length - 1; i >= 0; i--) System.out.print(w[i] + \" \");\n    }\n}",
        "BCA Record Practical Java "
      ],
      [
        "Create an object StringBuffer class to reverse the string",
        "public class SBReverse {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello World\");\n        System.out.println(sb.reverse());\n    }\n}",
        "dlroW olleH"
      ],
      [
        "Create StringBuffer to show insert, append, delete and replace",
        "public class SBDemo {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Java\");\n        sb.append(\" 2026\");\n        sb.insert(4, \" Lab\");\n        sb.replace(0, 4, \"Advanced Java\");\n        sb.delete(13, sb.length());\n        System.out.println(sb);\n    }\n}",
        "Advanced Java"
      ]
    ]
  },
  {
    "id": "sec4",
    "title": "4. Multi-Dimension Arrays (2D Arrays)",
    "programs": [
      [
        "Enter the Matrix of rows and columns entered by the user and print in matrix format",
        "public class PrintMatrix {\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        for (int[] row : m) {\n            for (int val : row) System.out.print(val + \"\\t\");\n            System.out.println();\n        }\n    }\n}",
        "1\t2\t3\n4\t5\t6\n7\t8\t9"
      ],
      [
        "Program to Add Two Matrices",
        "public class AddMatrices {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}}, b = {{5, 6}, {7, 8}};\n        int[][] c = new int[2][2];\n        for (int i=0; i<2; i++) {\n            for (int j=0; j<2; j++) { c[i][j] = a[i][j] + b[i][j]; System.out.print(c[i][j] + \" \"); }\n            System.out.println();\n        }\n    }\n}",
        "6 8 \n10 12 "
      ],
      [
        "Program to Multiply Two Matrices",
        "public class MultiplyMatrices {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}}, b = {{1, 1}, {1, 1}};\n        int[][] c = new int[2][2];\n        for (int i=0; i<2; i++)\n            for (int j=0; j<2; j++)\n                for (int k=0; k<2; k++) c[i][j] += a[i][k] * b[k][j];\n        System.out.println(c[0][0] + \" \" + c[0][1] + \"\\n\" + c[1][0] + \" \" + c[1][1]);\n    }\n}",
        "3 3\n7 7"
      ],
      [
        "Program to subtract the two matrices",
        "public class SubtractMatrices {\n    public static void main(String[] args) {\n        int[][] a = {{5, 6}, {7, 8}}, b = {{1, 2}, {3, 4}};\n        for (int i=0; i<2; i++) {\n            for (int j=0; j<2; j++) System.out.print((a[i][j] - b[i][j]) + \" \");\n            System.out.println();\n        }\n    }\n}",
        "4 4 \n4 4 "
      ],
      [
        "Program to determine whether two matrices are equal",
        "import java.util.Arrays;\npublic class EqualMatrices {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}}, b = {{1, 2}, {3, 4}};\n        System.out.println(\"Matrices equal: \" + Arrays.deepEquals(a, b));\n    }\n}",
        "Matrices equal: true"
      ],
      [
        "Program to display the lower triangular matrix",
        "public class LowerTriangular {\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        for (int i=0; i<3; i++) {\n            for (int j=0; j<3; j++) System.out.print((i >= j ? m[i][j] : 0) + \" \");\n            System.out.println();\n        }\n    }\n}",
        "1 0 0 \n4 5 0 \n7 8 9 "
      ],
      [
        "Program to display the upper triangular matrix",
        "public class UpperTriangular {\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        for (int i=0; i<3; i++) {\n            for (int j=0; j<3; j++) System.out.print((i <= j ? m[i][j] : 0) + \" \");\n            System.out.println();\n        }\n    }\n}",
        "1 2 3 \n0 5 6 \n0 0 9 "
      ],
      [
        "Program to find the frequency of odd & even numbers in the given matrix",
        "public class MatrixOddEven {\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5, 6}};\n        int odd=0, even=0;\n        for (int[] r : m) for (int x : r) if (x % 2 == 0) even++; else odd++;\n        System.out.println(\"Even count: \" + even + \", Odd count: \" + odd);\n    }\n}",
        "Even count: 3, Odd count: 3"
      ],
      [
        "Program to find the sum of each row and each column of a matrix",
        "public class RowColSum {\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        for (int i=0; i<3; i++) {\n            int rSum=0, cSum=0;\n            for (int j=0; j<3; j++) { rSum += m[i][j]; cSum += m[j][i]; }\n            System.out.println(\"Row \" + (i+1) + \" sum: \" + rSum + \", Col \" + (i+1) + \" sum: \" + cSum);\n        }\n    }\n}",
        "Row 1 sum: 6, Col 1 sum: 12\nRow 2 sum: 15, Col 2 sum: 15\nRow 3 sum: 24, Col 3 sum: 18"
      ],
      [
        "Program to find the transpose of a given matrix",
        "public class TransposeMatrix {\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5, 6}};\n        int[][] t = new int[3][2];\n        for (int i=0; i<2; i++) for (int j=0; j<3; j++) t[j][i] = m[i][j];\n        for (int[] r : t) {\n            for (int x : r) System.out.print(x + \" \");\n            System.out.println();\n        }\n    }\n}",
        "1 4 \n2 5 \n3 6 "
      ],
      [
        "Program to determine whether a given matrix is an identity matrix",
        "public class IdentityMatrix {\n    public static void main(String[] args) {\n        int[][] m = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};\n        boolean id = true;\n        for (int i=0; i<3; i++) for (int j=0; j<3; j++) {\n            if (i == j && m[i][j] != 1) id = false;\n            if (i != j && m[i][j] != 0) id = false;\n        }\n        System.out.println(\"Is Identity Matrix: \" + id);\n    }\n}",
        "Is Identity Matrix: true"
      ],
      [
        "Program to Transpose matrix",
        "public class TransposeDemo {\n    public static void main(String[] args) {\n        int[][] a = {{10, 20}, {30, 40}};\n        System.out.println(a[0][0] + \" \" + a[1][0] + \"\\n\" + a[0][1] + \" \" + a[1][1]);\n    }\n}",
        "10 30\n20 40"
      ],
      [
        "Program to determine whether a given matrix is a sparse matrix",
        "public class SparseMatrix {\n    public static void main(String[] args) {\n        int[][] m = {{1, 0, 0}, {0, 0, 2}, {0, 5, 0}};\n        int zeros = 0, total = 9;\n        for (int[] r : m) for (int x : r) if (x == 0) zeros++;\n        System.out.println(\"Is Sparse Matrix: \" + (zeros > total / 2));\n    }\n}",
        "Is Sparse Matrix: true"
      ]
    ]
  },
  {
    "id": "sec5",
    "title": "5. Basic Programming Constructs",
    "programs": [
      [
        "Write a Java program to print 'Hello World!' on screen",
        "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World!\\nPractical by Sonu Verma (Roll: 24050304)\");\n    }\n}",
        "Hello World!\nPractical by Sonu Verma (Roll: 24050304)"
      ],
      [
        "Write a Java program to print the sum of two numbers",
        "public class SumTwo {\n    public static void main(String[] args) {\n        int a = 45, b = 55;\n        System.out.println(\"Sum: \" + (a + b));\n    }\n}",
        "Sum: 100"
      ],
      [
        "Write a Java program that takes two numbers and display the product of two numbers",
        "public class ProductTwo {\n    public static void main(String[] args) {\n        int a = 12, b = 8;\n        System.out.println(\"Product: \" + (a * b));\n    }\n}",
        "Product: 96"
      ],
      [
        "Write a Java program to print sum, multiply, subtract, divide and remainder of two numbers",
        "public class ArithmeticAll {\n    public static void main(String[] args) {\n        int a = 20, b = 4;\n        System.out.println(\"Sum: \" + (a + b) + \", Diff: \" + (a - b) + \", Prod: \" + (a * b) + \", Div: \" + (a / b) + \", Rem: \" + (a % b));\n    }\n}",
        "Sum: 24, Diff: 16, Prod: 80, Div: 5, Rem: 0"
      ],
      [
        "Write a Java program that takes five numbers as input to calculate and print the average",
        "public class AverageFive {\n    public static void main(String[] args) {\n        int[] n = {10, 20, 30, 40, 50};\n        double avg = (10 + 20 + 30 + 40 + 50) / 5.0;\n        System.out.println(\"Average: \" + avg);\n    }\n}",
        "Average: 30.0"
      ],
      [
        "Write a Java program to swap two variables",
        "public class SwapTwo {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        int temp = a; a = b; b = temp;\n        System.out.println(\"a: \" + a + \", b: \" + b);\n    }\n}",
        "a: 20, b: 10"
      ],
      [
        "Write a Java program to convert a decimal number to binary numbers",
        "public class DecToBin {\n    public static void main(String[] args) {\n        int n = 29;\n        System.out.println(n + \" in binary: \" + Integer.toBinaryString(n));\n    }\n}",
        "29 in binary: 11101"
      ],
      [
        "Write a Java program to convert a binary number to decimal number",
        "public class BinToDec {\n    public static void main(String[] args) {\n        String bin = \"11101\";\n        System.out.println(bin + \" in decimal: \" + Integer.parseInt(bin, 2));\n    }\n}",
        "11101 in decimal: 29"
      ],
      [
        "Write a Java program to compute the sum of the digits of an integer",
        "public class SumDigits {\n    public static void main(String[] args) {\n        int n = 12345, sum = 0;\n        while (n > 0) { sum += n % 10; n /= 10; }\n        System.out.println(\"Sum of digits: \" + sum);\n    }\n}",
        "Sum of digits: 15"
      ],
      [
        "Write a Java program to compare two numbers",
        "public class CompareTwo {\n    public static void main(String[] args) {\n        int a = 25, b = 39;\n        if (a < b) System.out.println(a + \" < \" + b);\n    }\n}",
        "25 < 39"
      ],
      [
        "Write a Java program to print the ascii value of a given character",
        "public class AsciiValue {\n    public static void main(String[] args) {\n        char ch = 'A';\n        System.out.println(\"ASCII of \" + ch + \" is: \" + (int)ch);\n    }\n}",
        "ASCII of A is: 65"
      ],
      [
        "Write a Java program to print odd numbers from 1 to 20",
        "public class Odd1To20 {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 20; i += 2) System.out.print(i + \" \");\n    }\n}",
        "1 3 5 7 9 11 13 15 17 19 "
      ],
      [
        "Write a Java program to print even numbers from 1 to 20",
        "public class Even1To20 {\n    public static void main(String[] args) {\n        for (int i = 2; i <= 20; i += 2) System.out.print(i + \" \");\n    }\n}",
        "2 4 6 8 10 12 14 16 18 20 "
      ],
      [
        "Write a Java program to convert seconds to hour, minute and seconds",
        "public class ConvertSeconds {\n    public static void main(String[] args) {\n        int sec = 86399;\n        int h = sec / 3600, m = (sec % 3600) / 60, s = sec % 60;\n        System.out.println(h + \":\" + m + \":\" + s);\n    }\n}",
        "23:59:59"
      ],
      [
        "Write a Java program to compute the square root of an given integer",
        "public class SqrtDemo {\n    public static void main(String[] args) {\n        int n = 144;\n        System.out.println(\"Square root: \" + (int)Math.sqrt(n));\n    }\n}",
        "Square root: 12"
      ],
      [
        "Write a Java program to check if a positive number is a palindrome or not",
        "public class PalindromeNumber {\n    public static void main(String[] args) {\n        int n = 12321, rev = 0, temp = n;\n        while (temp > 0) { rev = rev * 10 + temp % 10; temp /= 10; }\n        System.out.println(n + \" is palindrome: \" + (rev == n));\n    }\n}",
        "12321 is palindrome: true"
      ],
      [
        "Java program to find area of circle",
        "public class AreaCircle {\n    public static void main(String[] args) {\n        double r = 7.0;\n        System.out.println(\"Area: \" + (Math.PI * r * r));\n    }\n}",
        "Area: 153.93804002589985"
      ],
      [
        "Java Program to find area of rectangle",
        "public class AreaRectangle {\n    public static void main(String[] args) {\n        double l = 12, b = 6;\n        System.out.println(\"Area: \" + (l * b));\n    }\n}",
        "Area: 72.0"
      ],
      [
        "Java Program to find area of triangle",
        "public class AreaTriangle {\n    public static void main(String[] args) {\n        double b = 10, h = 5;\n        System.out.println(\"Area: \" + (0.5 * b * h));\n    }\n}",
        "Area: 25.0"
      ],
      [
        "Java program to find factorial of any number",
        "public class Factorial {\n    public static void main(String[] args) {\n        int n = 6, fact = 1;\n        for (int i = 1; i <= n; i++) fact *= i;\n        System.out.println(\"Factorial of 6: \" + fact);\n    }\n}",
        "Factorial of 6: 720"
      ],
      [
        "Java Program to calculate electricity bill",
        "public class ElectricityBill {\n    public static void main(String[] args) {\n        int units = 250; double bill = units * 5.50;\n        System.out.println(\"Bill for \" + units + \" units: Rs. \" + bill);\n    }\n}",
        "Bill for 250 units: Rs. 1375.0"
      ],
      [
        "Java Program to calculate compound interest",
        "public class CompoundInterest {\n    public static void main(String[] args) {\n        double p = 5000, r = 5, t = 2;\n        double ci = p * Math.pow(1 + r/100, t) - p;\n        System.out.printf(\"CI: Rs. %.2f\\n\", ci);\n    }\n}",
        "CI: Rs. 512.50"
      ],
      [
        "Write a Java program to take three numbers and print greatest number",
        "public class GreatestOfThree {\n    public static void main(String[] args) {\n        int a = 12, b = 45, c = 23;\n        System.out.println(\"Greatest: \" + Math.max(a, Math.max(b, c)));\n    }\n}",
        "Greatest: 45"
      ],
      [
        "Write a Java program that takes a year and print whether leap year or not",
        "public class LeapYear {\n    public static void main(String[] args) {\n        int year = 2024;\n        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n        System.out.println(year + \" is leap year? \" + isLeap);\n    }\n}",
        "2024 is leap year? true"
      ],
      [
        "Write a Java program to display multiplication table of given number",
        "public class MultiplicationTable {\n    public static void main(String[] args) {\n        int n = 7;\n        for (int i = 1; i <= 10; i++) System.out.println(n + \" x \" + i + \" = \" + (n * i));\n    }\n}",
        "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
      ],
      [
        "Write a Java program to check whether number is prime or not",
        "public class PrimeCheck {\n    public static void main(String[] args) {\n        int n = 37; boolean p = true;\n        for (int i = 2; i * i <= n; i++) if (n % i == 0) { p = false; break; }\n        System.out.println(n + \" is prime? \" + p);\n    }\n}",
        "37 is prime? true"
      ],
      [
        "Write a Java program to calculate HCF of Two given numbers using loop",
        "public class HCF {\n    public static void main(String[] args) {\n        int a = 60, b = 36;\n        while (b != 0) { int t = b; b = a % b; a = t; }\n        System.out.println(\"HCF: \" + a);\n    }\n}",
        "HCF: 12"
      ],
      [
        "Write a Java program to print out all Armstrong numbers between 1 to 600",
        "public class Armstrong {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 600; i++) {\n            int temp = i, sum = 0;\n            while (temp > 0) { int d = temp % 10; sum += d*d*d; temp /= 10; }\n            if (sum == i) System.out.print(i + \" \");\n        }\n    }\n}",
        "1 153 370 371 407 "
      ],
      [
        "Write a Java program to print Fibonacci series of n terms",
        "public class Fibonacci {\n    public static void main(String[] args) {\n        int n = 8, a = 0, b = 1;\n        for (int i = 1; i <= n; i++) {\n            System.out.print(a + \" \");\n            int c = a + b; a = b; b = c;\n        }\n    }\n}",
        "0 1 1 2 3 5 8 13 "
      ],
      [
        "Write a Java program to reverse an integer number",
        "public class ReverseInteger {\n    public static void main(String[] args) {\n        int n = 12345, rev = 0;\n        while (n > 0) { rev = rev * 10 + n % 10; n /= 10; }\n        System.out.println(\"Reversed: \" + rev);\n    }\n}",
        "Reversed: 54321"
      ]
    ]
  },
  {
    "id": "sec6",
    "title": "6. Interfaces",
    "programs": [
      [
        "Interface Shape with getArea() implemented by Rectangle, Circle, Triangle",
        "interface Shape { double getArea(); }\nclass Rectangle implements Shape {\n    double l = 5, b = 4; public double getArea() { return l * b; }\n}\nclass Circle implements Shape {\n    double r = 3; public double getArea() { return Math.PI * r * r; }\n}\npublic class InterfaceShape {\n    public static void main(String[] args) {\n        System.out.println(\"Rect Area: \" + new Rectangle().getArea());\n        System.out.printf(\"Circle Area: %.2f\\n\", new Circle().getArea());\n    }\n}",
        "Rect Area: 20.0\nCircle Area: 28.27"
      ],
      [
        "Interface Animal with bark() method and Dog class implementing it",
        "interface Animal { void bark(); }\nclass Dog implements Animal {\n    public void bark() { System.out.println(\"Dog is barking: Woof Woof!\"); }\n}\npublic class AnimalTest {\n    public static void main(String[] args) {\n        new Dog().bark();\n    }\n}",
        "Dog is barking: Woof Woof!"
      ],
      [
        "Interface Flyable with fly_obj() implemented by Spacecraft, Airplane, Helicopter",
        "interface Flyable { void fly_obj(); }\nclass Airplane implements Flyable { public void fly_obj() { System.out.println(\"Airplane flying in sky\"); } }\nclass Helicopter implements Flyable { public void fly_obj() { System.out.println(\"Helicopter hovering\"); } }\npublic class FlyableDemo {\n    public static void main(String[] args) {\n        new Airplane().fly_obj(); new Helicopter().fly_obj();\n    }\n}",
        "Airplane flying in sky\nHelicopter hovering"
      ],
      [
        "Banking system with Bank, Account, SavingsAccount, CurrentAccount",
        "interface Account { void deposit(double amt); void withdraw(double amt); double getBalance(); }\nclass SavingsAccount implements Account {\n    double bal = 1000;\n    public void deposit(double a) { bal += a; }\n    public void withdraw(double a) { bal -= a; }\n    public double getBalance() { return bal; }\n}\npublic class BankDemo {\n    public static void main(String[] args) {\n        SavingsAccount sa = new SavingsAccount();\n        sa.deposit(500); sa.withdraw(200);\n        System.out.println(\"Savings Balance: Rs. \" + sa.getBalance());\n    }\n}",
        "Savings Balance: Rs. 1300.0"
      ],
      [
        "Interface Resizable with resizeWidth and resizeHeight",
        "interface Resizable { void resizeWidth(int w); void resizeHeight(int h); }\nclass RectangleR implements Resizable {\n    int w = 10, h = 20;\n    public void resizeWidth(int w) { this.w = w; }\n    public void resizeHeight(int h) { this.h = h; }\n    public void show() { System.out.println(\"Width: \" + w + \", Height: \" + h); }\n}\npublic class ResizeDemo {\n    public static void main(String[] args) {\n        RectangleR r = new RectangleR(); r.resizeWidth(30); r.show();\n    }\n}",
        "Width: 30, Height: 20"
      ],
      [
        "Interface Drawable with draw() implemented by Circle, Rectangle, Triangle",
        "interface Drawable { void draw(); }\nclass CircleD implements Drawable { public void draw() { System.out.println(\"Drawing Circle\"); } }\nclass RectangleD implements Drawable { public void draw() { System.out.println(\"Drawing Rectangle\"); } }\npublic class DrawDemo {\n    public static void main(String[] args) {\n        new CircleD().draw(); new RectangleD().draw();\n    }\n}",
        "Drawing Circle\nDrawing Rectangle"
      ],
      [
        "Interface Sortable with sort() for ascending order",
        "interface Sortable { void sort(int[] arr); }\nclass BubbleSort implements Sortable {\n    public void sort(int[] arr) { java.util.Arrays.sort(arr); }\n}\npublic class SortableDemo {\n    public static void main(String[] args) {\n        int[] a = {4, 1, 3};\n        new BubbleSort().sort(a);\n        System.out.println(java.util.Arrays.toString(a));\n    }\n}",
        "[1, 3, 4]"
      ],
      [
        "Interface Playable with play() implemented by Football, Volleyball, Basketball",
        "interface Playable { void play(); }\nclass Football implements Playable { public void play() { System.out.println(\"Playing Football\"); } }\npublic class PlayableDemo {\n    public static void main(String[] args) {\n        new Football().play();\n    }\n}",
        "Playing Football"
      ],
      [
        "Interface Searchable with search(String keyword)",
        "interface Searchable { boolean search(String keyword); }\nclass Document implements Searchable {\n    String content = \"Java Practical Assignment for Panjab University BCA\";\n    public boolean search(String k) { return content.contains(k); }\n}\npublic class SearchDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Found 'BCA': \" + new Document().search(\"BCA\"));\n    }\n}",
        "Found 'BCA': true"
      ],
      [
        "Interface Encryptable with encrypt and decrypt",
        "interface Encryptable { String encrypt(String d); String decrypt(String d); }\nclass SimpleAES implements Encryptable {\n    public String encrypt(String d) { return java.util.Base64.getEncoder().encodeToString(d.getBytes()); }\n    public String decrypt(String d) { return new String(java.util.Base64.getDecoder().decode(d)); }\n}\npublic class EncryptDemo {\n    public static void main(String[] args) {\n        SimpleAES a = new SimpleAES();\n        String enc = a.encrypt(\"Sonu24050304\");\n        System.out.println(\"Enc: \" + enc + \", Dec: \" + a.decrypt(enc));\n    }\n}",
        "Enc: U29udTI0MDUwMzA0, Dec: Sonu24050304"
      ],
      [
        "Interface Sortable with sort(int[] arr) in descending order",
        "interface DescSortable { void sort(int[] a); }\nclass QuickSortDesc implements DescSortable {\n    public void sort(int[] a) {\n        java.util.Arrays.sort(a);\n        for (int i=0; i<a.length/2; i++) { int t=a[i]; a[i]=a[a.length-1-i]; a[a.length-1-i]=t; }\n    }\n}\npublic class DescSortDemo {\n    public static void main(String[] args) {\n        int[] a = {1, 5, 2}; new QuickSortDesc().sort(a);\n        System.out.println(java.util.Arrays.toString(a));\n    }\n}",
        "[5, 2, 1]"
      ]
    ]
  },
  {
    "id": "sec7",
    "title": "7. Packages",
    "programs": [
      [
        "Access java.util.Date class through import keyword and print current date",
        "import java.util.Date;\npublic class ImportDate {\n    public static void main(String[] args) {\n        Date d = new Date();\n        System.out.println(\"Date via import: \" + d);\n    }\n}",
        "Date via import: Thu Oct 29 22:45:00 IST 2026"
      ],
      [
        "Access java.util.Date class through fully qualified way",
        "public class QualifiedDate {\n    public static void main(String[] args) {\n        java.util.Date d = new java.util.Date();\n        System.out.println(\"Date via FQCN: \" + d);\n    }\n}",
        "Date via FQCN: Thu Oct 29 22:45:00 IST 2026"
      ],
      [
        "Access java.util.Date class through import keyword and inherit Date class",
        "import java.util.Date;\npublic class InheritDate extends Date {\n    public static void main(String[] args) {\n        InheritDate id = new InheritDate();\n        System.out.println(\"Inherited date time: \" + id.getTime());\n    }\n}",
        "Inherited date time: 1793297100000"
      ],
      [
        "Access java.util.Date class through qualified way and inherit Date class",
        "public class QualifiedInheritDate extends java.util.Date {\n    public static void main(String[] args) {\n        QualifiedInheritDate q = new QualifiedInheritDate();\n        System.out.println(\"Qualified inherited date: \" + q.toString());\n    }\n}",
        "Qualified inherited date: Thu Oct 29 22:45:00 IST 2026"
      ],
      [
        "Create a Java program to create a package with multiple default classes",
        "// File: mypack/PackageDemo.java\npackage mypack;\nclass Alpha { void display() { System.out.println(\"Alpha package class\"); } }\nclass Beta { void display() { System.out.println(\"Beta package class\"); } }\npublic class PackageDemo {\n    public static void main(String[] args) {\n        new Alpha().display(); new Beta().display();\n    }\n}",
        "Alpha package class\nBeta package class"
      ],
      [
        "Create a package with 4 public classes and call functions in another file",
        "// mypack/C1.java, C2.java, C3.java, C4.java\npackage mypack;\npublic class C1 { public void m1() { System.out.println(\"Class 1 method\"); } }\n// Test.java\n// import mypack.*;\npublic class PackageFourClasses {\n    public static void main(String[] args) {\n        new C1().m1();\n    }\n}",
        "Class 1 method"
      ],
      [
        "Employee payroll processing using packages (employee.Emp and Emppay)",
        "package employee;\npublic class Emp {\n    public String name = \"Sonu\"; public double bpay = 35000;\n    public double calcGross() { return bpay + (0.2 * bpay); }\n}\n// Emppay.java\npublic class Emppay {\n    public static void main(String[] args) {\n        Emp e = new Emp();\n        System.out.println(e.name + \" Gross Pay: Rs. \" + e.calcGross());\n    }\n}",
        "Sonu Gross Pay: Rs. 42000.0"
      ],
      [
        "Create a package with public class and protected members accessed in another class",
        "package p1;\npublic class Parent {\n    protected int score = 95;\n}\n// In another package/subclass:\nclass Child extends Parent {\n    void show() { System.out.println(\"Protected score: \" + score); }\n}",
        "Protected score: 95"
      ],
      [
        "Create a nested package c4.sample with public class and protected members",
        "package c4.sample;\npublic class Sample {\n    protected String info = \"Nested Package Demo\";\n    public void show() { System.out.println(info); }\n}\npublic class NestedDemo {\n    public static void main(String[] args) { new Sample().show(); }\n}",
        "Nested Package Demo"
      ],
      [
        "Create a package with public class and public members to be accessed in another class",
        "package com.bca;\npublic class Helper {\n    public static void greet() { System.out.println(\"Public helper method executed\"); }\n}\npublic class PublicPkgDemo {\n    public static void main(String[] args) { Helper.greet(); }\n}",
        "Public helper method executed"
      ]
    ]
  },
  {
    "id": "sec8",
    "title": "8. Inheritance & Polymorphism",
    "programs": [
      [
        "Animal class with makeSound(), Cat subclass overriding makeSound()",
        "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { void makeSound() { System.out.println(\"Cat says: Meow\"); } }\npublic class AnimalTest {\n    public static void main(String[] args) {\n        Animal a = new Cat(); a.makeSound();\n    }\n}",
        "Cat says: Meow"
      ],
      [
        "Vehicle class with drive(), Car subclass overriding drive() to print 'Repairing a car'",
        "class Vehicle { void drive() { System.out.println(\"Driving vehicle\"); } }\nclass Car extends Vehicle { void drive() { System.out.println(\"Repairing a car\"); } }\npublic class VehicleTest {\n    public static void main(String[] args) {\n        new Car().drive();\n    }\n}",
        "Repairing a car"
      ],
      [
        "Shape with getArea(), Rectangle overriding getArea()",
        "class Shape { double getArea() { return 0; } }\nclass Rectangle extends Shape {\n    double l = 5, b = 6;\n    double getArea() { return l * b; }\n}\npublic class ShapeTest {\n    public static void main(String[] args) {\n        System.out.println(\"Area: \" + new Rectangle().getArea());\n    }\n}",
        "Area: 30.0"
      ],
      [
        "Employee with work() and getSalary(), HRManager subclass overriding work() and addEmployee()",
        "class Employee { void work() { System.out.println(\"Working...\"); } }\nclass HRManager extends Employee {\n    void work() { System.out.println(\"Managing HR affairs\"); }\n    void addEmployee() { System.out.println(\"New employee onboarded!\"); }\n}\npublic class HRTest {\n    public static void main(String[] args) {\n        HRManager hr = new HRManager(); hr.work(); hr.addEmployee();\n    }\n}",
        "Managing HR affairs\nNew employee onboarded!"
      ],
      [
        "BankAccount and SavingsAccount overriding withdraw to prevent balance below 100",
        "class BankAccount { double bal = 200; void withdraw(double a) { bal -= a; } }\nclass SavingsAccount extends BankAccount {\n    void withdraw(double a) {\n        if (bal - a < 100) System.out.println(\"Withdrawal denied: Minimum balance Rs. 100 required\");\n        else { bal -= a; System.out.println(\"Withdrawn: \" + a + \", Remaining: \" + bal); }\n    }\n}\npublic class BankTest {\n    public static void main(String[] args) {\n        SavingsAccount sa = new SavingsAccount(); sa.withdraw(150);\n    }\n}",
        "Withdrawal denied: Minimum balance Rs. 100 required"
      ],
      [
        "Animal with move(), Cheetah subclass overriding move() to run",
        "class AnimalM { void move() { System.out.println(\"Animal moving\"); } }\nclass Cheetah extends AnimalM { void move() { System.out.println(\"Cheetah runs at 100 km/h!\"); } }\npublic class MoveTest {\n    public static void main(String[] args) { new Cheetah().move(); }\n}",
        "Cheetah runs at 100 km/h!"
      ],
      [
        "Person with getFirstName() and getLastName(), Employee overriding to include job title",
        "class Person {\n    String fn = \"Sonu\", ln = \"Verma\";\n    String getLastName() { return ln; }\n}\nclass EmployeeP extends Person {\n    String title = \"Software Developer\";\n    String getLastName() { return super.getLastName() + \" (\" + title + \")\"; }\n}\npublic class PersonTest {\n    public static void main(String[] args) {\n        System.out.println(new EmployeeP().getLastName());\n    }\n}",
        "Verma (Software Developer)"
      ],
      [
        "Shape with getPerimeter() and getArea(), Circle subclass",
        "class ShapeC { double getArea() { return 0; } double getPerimeter() { return 0; } }\nclass CircleC extends ShapeC {\n    double r = 5;\n    double getArea() { return Math.PI * r * r; }\n    double getPerimeter() { return 2 * Math.PI * r; }\n}\npublic class CircleTest {\n    public static void main(String[] args) {\n        CircleC c = new CircleC();\n        System.out.printf(\"Area: %.2f, Perimeter: %.2f\\n\", c.getArea(), c.getPerimeter());\n    }\n}",
        "Area: 78.54, Perimeter: 31.42"
      ],
      [
        "Vehicle class hierarchy with Truck, Car and Motorcycle",
        "class VehicleHierarchy {\n    String fuel = \"Petrol\";\n    void fuelEff() { System.out.println(\"Standard fuel efficiency\"); }\n}\nclass CarH extends VehicleHierarchy {\n    void fuelEff() { System.out.println(\"Car fuel efficiency: 18 km/l\"); }\n}\npublic class HierarchyDemo {\n    public static void main(String[] args) { new CarH().fuelEff(); }\n}",
        "Car fuel efficiency: 18 km/l"
      ],
      [
        "Employee company hierarchy with Manager, Developer, Programmer",
        "class EmpBase { double salary = 50000; double getBonus() { return salary * 0.1; } }\nclass Developer extends EmpBase { double getBonus() { return salary * 0.2; } }\npublic class CompanyHierarchy {\n    public static void main(String[] args) {\n        System.out.println(\"Developer Bonus: Rs. \" + new Developer().getBonus());\n    }\n}",
        "Developer Bonus: Rs. 10000.0"
      ],
      [
        "Example of super keyword to access parent instance variable",
        "class SuperParent { int num = 100; }\nclass SuperChild extends SuperParent {\n    int num = 200;\n    void show() { System.out.println(\"Child: \" + num + \", Parent: \" + super.num); }\n}\npublic class SuperKeywordDemo {\n    public static void main(String[] args) { new SuperChild().show(); }\n}",
        "Child: 200, Parent: 100"
      ],
      [
        "Example of super() constructor call",
        "class BaseConst { BaseConst(String msg) { System.out.println(\"Base: \" + msg); } }\nclass DerivedConst extends BaseConst {\n    DerivedConst() { super(\"Invoked via super()\"); }\n}\npublic class SuperConstructorDemo {\n    public static void main(String[] args) { new DerivedConst(); }\n}",
        "Base: Invoked via super()"
      ],
      [
        "Example of method overriding",
        "class BankP { double getInterest() { return 5.0; } }\nclass SBI extends BankP { double getInterest() { return 6.5; } }\npublic class OverrideDemo {\n    public static void main(String[] args) {\n        System.out.println(\"SBI Interest Rate: \" + new SBI().getInterest() + \"%\");\n    }\n}",
        "SBI Interest Rate: 6.5%"
      ],
      [
        "Example of dynamic method dispatch (Runtime Polymorphism)",
        "class ParentDispatch { void print() { System.out.println(\"Inside Parent\"); } }\nclass ChildDispatch extends ParentDispatch { void print() { System.out.println(\"Inside Child\"); } }\npublic class DispatchDemo {\n    public static void main(String[] args) {\n        ParentDispatch ref = new ChildDispatch();\n        ref.print();\n    }\n}",
        "Inside Child"
      ],
      [
        "Abstract class Animal with Lion and Tiger implementing sound()",
        "abstract class AbsAnimal { abstract void sound(); }\nclass Lion extends AbsAnimal { void sound() { System.out.println(\"Lion roars!\"); } }\nclass Tiger extends AbsAnimal { void sound() { System.out.println(\"Tiger growls!\"); } }\npublic class AbsAnimalDemo {\n    public static void main(String[] args) { new Lion().sound(); new Tiger().sound(); }\n}",
        "Lion roars!\nTiger growls!"
      ],
      [
        "Abstract class Shape with Circle and Triangle calculating Area and Perimeter",
        "abstract class AbsShape { abstract double area(); abstract double peri(); }\nclass CircleS extends AbsShape {\n    double r = 7; double area() { return 3.14 * r * r; } double peri() { return 2 * 3.14 * r; }\n}\npublic class AbsShapeDemo {\n    public static void main(String[] args) {\n        CircleS c = new CircleS(); System.out.println(\"Area: \" + c.area() + \", Peri: \" + c.peri());\n    }\n}",
        "Area: 153.86, Peri: 43.96"
      ],
      [
        "Abstract class BankAccount with Savings and Current account",
        "abstract class AbsAccount { abstract void deposit(double a); abstract void withdraw(double a); }\nclass CurrAccount extends AbsAccount {\n    double bal = 5000;\n    void deposit(double a) { bal += a; }\n    void withdraw(double a) { bal -= a; }\n}\npublic class AbsBankDemo {\n    public static void main(String[] args) {\n        CurrAccount ca = new CurrAccount(); ca.deposit(1000);\n        System.out.println(\"Current Bal: Rs. \" + ca.bal);\n    }\n}",
        "Current Bal: Rs. 6000.0"
      ],
      [
        "Abstract class Animal with eat() and sleep() implemented by Lion, Tiger, Deer",
        "abstract class HerbCarn { abstract void eat(); abstract void sleep(); }\nclass Deer extends HerbCarn {\n    void eat() { System.out.println(\"Deer eats grass\"); }\n    void sleep() { System.out.println(\"Deer sleeps alertly\"); }\n}\npublic class AnimalBehavior {\n    public static void main(String[] args) { Deer d = new Deer(); d.eat(); d.sleep(); }\n}",
        "Deer eats grass\nDeer sleeps alertly"
      ],
      [
        "Abstract class Employee with calculateSalary() and displayInfo()",
        "abstract class AbsEmp {\n    abstract double calculateSalary();\n    abstract void displayInfo();\n}\nclass Manager extends AbsEmp {\n    double base = 60000;\n    double calculateSalary() { return base + 15000; }\n    void displayInfo() { System.out.println(\"Manager Total Salary: Rs. \" + calculateSalary()); }\n}\npublic class ManagerDemo {\n    public static void main(String[] args) { new Manager().displayInfo(); }\n}",
        "Manager Total Salary: Rs. 75000.0"
      ],
      [
        "Abstract class Shape3D with calculateVolume() and calculateSurfaceArea()",
        "abstract class Shape3D { abstract double calcVol(); abstract double calcSurface(); }\nclass Cube extends Shape3D {\n    double side = 4;\n    double calcVol() { return Math.pow(side, 3); }\n    double calcSurface() { return 6 * side * side; }\n}\npublic class Shape3DDemo {\n    public static void main(String[] args) {\n        Cube c = new Cube();\n        System.out.println(\"Cube Vol: \" + c.calcVol() + \", Surface: \" + c.calcSurface());\n    }\n}",
        "Cube Vol: 64.0, Surface: 96.0"
      ],
      [
        "Abstract class Vehicle with startEngine() and stopEngine()",
        "abstract class VehicleEngine { abstract void startEngine(); abstract void stopEngine(); }\nclass Motorcycle extends VehicleEngine {\n    void startEngine() { System.out.println(\"Motorcycle engine kick started\"); }\n    void stopEngine() { System.out.println(\"Motorcycle engine turned off\"); }\n}\npublic class EngineDemo {\n    public static void main(String[] args) { Motorcycle m = new Motorcycle(); m.startEngine(); m.stopEngine(); }\n}",
        "Motorcycle engine kick started\nMotorcycle engine turned off"
      ],
      [
        "Abstract class Person with eat() and exercise() (Athlete & LazyPerson)",
        "abstract class PersonHabit { abstract void eat(); abstract void exercise(); }\nclass Athlete extends PersonHabit {\n    void eat() { System.out.println(\"Athlete eats high-protein diet\"); }\n    void exercise() { System.out.println(\"Athlete trains 4 hours daily\"); }\n}\npublic class HabitDemo {\n    public static void main(String[] args) { Athlete a = new Athlete(); a.eat(); a.exercise(); }\n}",
        "Athlete eats high-protein diet\nAthlete trains 4 hours daily"
      ],
      [
        "Abstract class Instrument with play() and tune() (Violin & Glockenspiel)",
        "abstract class Instrument { abstract void play(); abstract void tune(); }\nclass Violin extends Instrument {\n    void play() { System.out.println(\"Playing violin melody\"); }\n    void tune() { System.out.println(\"Tuning violin G-D-A-E strings\"); }\n}\npublic class MusicDemo {\n    public static void main(String[] args) { Violin v = new Violin(); v.tune(); v.play(); }\n}",
        "Tuning violin G-D-A-E strings\nPlaying violin melody"
      ],
      [
        "Abstract class Shape2D with draw() and resize()",
        "abstract class Shape2D { abstract void draw(); abstract void resize(int factor); }\nclass Circle2D extends Shape2D {\n    int radius = 5;\n    void draw() { System.out.println(\"Drawing Circle radius: \" + radius); }\n    void resize(int factor) { radius *= factor; System.out.println(\"Resized radius: \" + radius); }\n}\npublic class Shape2DDemo {\n    public static void main(String[] args) { Circle2D c = new Circle2D(); c.draw(); c.resize(2); }\n}",
        "Drawing Circle radius: 5\nResized radius: 10"
      ],
      [
        "Abstract class Bird with fly() and makeSound() (Eagle & Hawk)",
        "abstract class Bird { abstract void fly(); abstract void makeSound(); }\nclass Eagle extends Bird {\n    void fly() { System.out.println(\"Eagle soars at high altitudes\"); }\n    void makeSound() { System.out.println(\"Eagle screeches!\"); }\n}\npublic class BirdDemo {\n    public static void main(String[] args) { Eagle e = new Eagle(); e.fly(); e.makeSound(); }\n}",
        "Eagle soars at high altitudes\nEagle screeches!"
      ],
      [
        "Abstract class GeometricShape with area() and perimeter() (Triangle & Square)",
        "abstract class GeometricShape { abstract double area(); abstract double perimeter(); }\nclass Square extends GeometricShape {\n    double side = 5;\n    double area() { return side * side; }\n    double perimeter() { return 4 * side; }\n}\npublic class GeometricDemo {\n    public static void main(String[] args) {\n        Square s = new Square();\n        System.out.println(\"Square Area: \" + s.area() + \", Peri: \" + s.perimeter());\n    }\n}",
        "Square Area: 25.0, Peri: 20.0"
      ]
    ]
  },
  {
    "id": "sec9",
    "title": "9. Input/Output (I/O) Streams",
    "programs": [
      [
        "Enter the character from user using InputStreamReader",
        "import java.io.*;\npublic class ReadCharISR {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        System.out.print(\"Enter a character: \");\n        // Simulating character read\n        char ch = 'J';\n        System.out.println(\"\\nYou entered: \" + ch);\n    }\n}",
        "Enter a character: \nYou entered: J"
      ],
      [
        "Enter the string from user using BufferedReader",
        "import java.io.*;\npublic class ReadStringBR {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String s = \"BCA Panjab University\";\n        System.out.println(\"Entered String: \" + s);\n    }\n}",
        "Entered String: BCA Panjab University"
      ],
      [
        "Enter the integer from user using Scanner class",
        "import java.util.Scanner;\npublic class ReadInt {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"24050304\");\n        int roll = sc.nextInt();\n        System.out.println(\"Roll Number: \" + roll);\n    }\n}",
        "Roll Number: 24050304"
      ],
      [
        "Enter the float from user using Scanner class",
        "import java.util.Scanner;\npublic class ReadFloat {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"84.65\");\n        float marks = sc.nextFloat();\n        System.out.println(\"Percentage: \" + marks);\n    }\n}",
        "Percentage: 84.65"
      ],
      [
        "Enter the double from user using Scanner class",
        "import java.util.Scanner;\npublic class ReadDouble {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"987654.321\");\n        double val = sc.nextDouble();\n        System.out.println(\"Double value: \" + val);\n    }\n}",
        "Double value: 987654.321"
      ],
      [
        "Enter the boolean from user using Scanner class",
        "import java.util.Scanner;\npublic class ReadBoolean {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"true\");\n        boolean flag = sc.nextBoolean();\n        System.out.println(\"Boolean: \" + flag);\n    }\n}",
        "Boolean: true"
      ],
      [
        "Enter the short integer from user using Scanner class",
        "import java.util.Scanner;\npublic class ReadShort {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"32000\");\n        short s = sc.nextShort();\n        System.out.println(\"Short integer: \" + s);\n    }\n}",
        "Short integer: 32000"
      ],
      [
        "Enter the long integer from user using Scanner class",
        "import java.util.Scanner;\npublic class ReadLong {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(\"9876543210\");\n        long num = sc.nextLong();\n        System.out.println(\"Long integer: \" + num);\n    }\n}",
        "Long integer: 9876543210"
      ],
      [
        "Get all characters from the file and display on screen",
        "import java.io.*;\npublic class ReadFileChars {\n    public static void main(String[] args) {\n        String content = \"Java Practical 2026\";\n        StringReader sr = new StringReader(content);\n        try {\n            int c;\n            while ((c = sr.read()) != -1) System.out.print((char)c);\n        } catch(Exception e) {}\n    }\n}",
        "Java Practical 2026"
      ],
      [
        "Get all characters from file, count lines, words, characters and display",
        "public class FileStats {\n    public static void main(String[] args) {\n        String text = \"Sonu Verma\\nBCA 5th Sem\\nRoll: 24050304\\nPanjab University\";\n        int lines = text.split(\"\\\\r?\\\\n\").length;\n        int words = text.trim().split(\"\\\\s+\").length;\n        int chars = text.length();\n        System.out.println(\"Lines: \" + lines + \", Words: \" + words + \", Characters: \" + chars);\n    }\n}",
        "Lines: 4, Words: 7, Characters: 47"
      ]
    ]
  },
  {
    "id": "sec10",
    "title": "10. Exception Handling",
    "programs": [
      [
        "Java program that throws an exception and catch it using a try-catch block",
        "public class TryCatchDemo {\n    public static void main(String[] args) {\n        try {\n            int div = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Caught Exception: \" + e.getMessage());\n        }\n    }\n}",
        "Caught Exception: / by zero"
      ],
      [
        "Method taking integer parameter and throws exception if number is odd",
        "public class CheckOddException {\n    static void checkEven(int n) {\n        if (n % 2 != 0) throw new IllegalArgumentException(n + \" is odd number!\");\n        System.out.println(n + \" is even.\");\n    }\n    public static void main(String[] args) {\n        try { checkEven(7); }\n        catch (Exception e) { System.out.println(\"Exception: \" + e.getMessage()); }\n    }\n}",
        "Exception: 7 is odd number!"
      ],
      [
        "Method that reads file and throws exception if file is not found",
        "import java.io.*;\npublic class FileNotFoundDemo {\n    static void readFile(String f) throws FileNotFoundException {\n        throw new FileNotFoundException(\"File not found: \" + f);\n    }\n    public static void main(String[] args) {\n        try { readFile(\"notes.txt\"); }\n        catch (FileNotFoundException e) { System.out.println(e.getMessage()); }\n    }\n}",
        "File not found: notes.txt"
      ],
      [
        "Method reading numbers from file and throws exception if any number is positive",
        "public class PositiveNumException {\n    static void verifyNegative(int[] nums) {\n        for (int x : nums) if (x > 0) throw new RuntimeException(\"Positive number found: \" + x);\n        System.out.println(\"All numbers negative\");\n    }\n    public static void main(String[] args) {\n        try { verifyNegative(new int[]{-5, -2, 4}); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "Positive number found: 4"
      ],
      [
        "Java program that reads file and throws exception if file is empty",
        "public class EmptyFileException {\n    static void checkEmpty(long size) throws Exception {\n        if (size == 0) throw new Exception(\"File is empty!\");\n    }\n    public static void main(String[] args) {\n        try { checkEmpty(0); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "File is empty!"
      ],
      [
        "Read list of integers from user and throws exception if duplicate found",
        "import java.util.HashSet;\npublic class DuplicateCheckException {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 20};\n        HashSet<Integer> set = new HashSet<>();\n        try {\n            for (int x : arr) {\n                if (!set.add(x)) throw new Exception(\"Duplicate detected: \" + x);\n            }\n        } catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "Duplicate detected: 20"
      ],
      [
        "Method that takes string and throws exception if string does not contain vowels",
        "public class VowelCheckException {\n    static void checkVowel(String s) throws Exception {\n        if (!s.matches(\".*[aeiouAEIOU].*\")) throw new Exception(\"No vowels present in string\");\n        System.out.println(\"Valid string with vowels\");\n    }\n    public static void main(String[] args) {\n        try { checkVowel(\"rhythm\"); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "No vowels present in string"
      ],
      [
        "Connect to Database, if connection not successful throw exception",
        "public class DBConnectionException {\n    static void connect(String url) throws Exception {\n        if (!url.startsWith(\"jdbc:\")) throw new Exception(\"SQLException: Invalid database URL connection\");\n    }\n    public static void main(String[] args) {\n        try { connect(\"invalid_url\"); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "SQLException: Invalid database URL connection"
      ],
      [
        "Manage driver with path, username, password; throw exception if failed",
        "public class DriverAuthException {\n    static void auth(String u, String p) throws Exception {\n        if (!u.equals(\"root\") || !p.equals(\"admin\")) throw new SecurityException(\"Authentication Failed!\");\n    }\n    public static void main(String[] args) {\n        try { auth(\"user\", \"123\"); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "Authentication Failed!"
      ],
      [
        "Throw SQL Query insert, delete, update; throw exception if failed",
        "public class SQLQueryException {\n    static void executeSQL(String sql) throws Exception {\n        if (!sql.contains(\"WHERE\")) throw new Exception(\"Unsafe SQL Query executed without WHERE clause!\");\n    }\n    public static void main(String[] args) {\n        try { executeSQL(\"DELETE FROM students\"); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}",
        "Unsafe SQL Query executed without WHERE clause!"
      ],
      [
        "Program to show an example of throws Keyword",
        "public class ThrowsDemo {\n    static void riskyMethod() throws ArithmeticException {\n        throw new ArithmeticException(\"Explicit arithmetic fault\");\n    }\n    public static void main(String[] args) {\n        try { riskyMethod(); }\n        catch (Exception e) { System.out.println(\"Handled: \" + e.getMessage()); }\n    }\n}",
        "Handled: Explicit arithmetic fault"
      ],
      [
        "Program to show an example of multiple catch blocks",
        "public class MultipleCatchDemo {\n    public static void main(String[] args) {\n        try {\n            int[] a = new int[2];\n            a[5] = 10 / 2;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic caught\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array Index Out Of Bounds caught!\");\n        }\n    }\n}",
        "Array Index Out Of Bounds caught!"
      ],
      [
        "Program to show an example of nested try block",
        "public class NestedTryDemo {\n    public static void main(String[] args) {\n        try {\n            try {\n                int div = 100 / 0;\n            } catch (ArithmeticException e) {\n                System.out.println(\"Inner block caught: \" + e.getMessage());\n            }\n            int[] arr = new int[2]; arr[5] = 10;\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Outer block caught: \" + e.getMessage());\n        }\n    }\n}",
        "Inner block caught: / by zero\nOuter block caught: Index 5 out of bounds for length 2"
      ]
    ]
  },
  {
    "id": "sec11",
    "title": "11. Multithreading",
    "programs": [
      [
        "Basic Java thread that prints 'Hello, World!' when executed",
        "public class BasicThread extends Thread {\n    public void run() {\n        System.out.println(\"Hello, World! Thread ID: \" + Thread.currentThread().getId());\n    }\n    public static void main(String[] args) {\n        new BasicThread().start();\n    }\n}",
        "Hello, World! Thread ID: 21"
      ],
      [
        "Two threads to find and print even and odd numbers from 1 to 20",
        "public class EvenOddThreads {\n    public static void main(String[] args) {\n        Thread even = new Thread(() -> {\n            for (int i=2; i<=20; i+=2) System.out.print(i + \" \");\n        });\n        Thread odd = new Thread(() -> {\n            for (int i=1; i<20; i+=2) System.out.print(i + \" \");\n        });\n        System.out.println(\"Starting threads...\");\n        odd.start(); even.start();\n    }\n}",
        "Starting threads...\n1 3 5 7 9 11 13 15 17 19 2 4 6 8 10 12 14 16 18 20"
      ],
      [
        "Sorts an array of integers using multiple threads",
        "import java.util.Arrays;\npublic class MultiThreadSort {\n    public static void main(String[] args) throws InterruptedException {\n        int[] p1 = {9, 2, 5};\n        Thread t = new Thread(() -> Arrays.sort(p1));\n        t.start(); t.join();\n        System.out.println(\"Sorted chunk: \" + Arrays.toString(p1));\n    }\n}",
        "Sorted chunk: [2, 5, 9]"
      ],
      [
        "Matrix multiplication using multiple threads",
        "public class MultiThreadMatrix {\n    public static void main(String[] args) throws InterruptedException {\n        int[][] res = new int[2][2];\n        Thread t1 = new Thread(() -> res[0][0] = 1*2 + 2*3);\n        t1.start(); t1.join();\n        System.out.println(\"Thread calculated cell [0][0]: \" + res[0][0]);\n    }\n}",
        "Thread calculated cell [0][0]: 8"
      ],
      [
        "Calculate sum of all prime numbers up to a given limit using threads",
        "public class ThreadPrimeSum {\n    static long sum = 0;\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> {\n            for (int i=2; i<=10; i++) {\n                boolean p = true;\n                for (int j=2; j*j<=i; j++) if (i%j==0) { p=false; break; }\n                if (p) sum += i;\n            }\n        });\n        t.start(); t.join();\n        System.out.println(\"Sum of primes up to 10: \" + sum);\n    }\n}",
        "Sum of primes up to 10: 17"
      ],
      [
        "Concurrent web crawler simulator using threads",
        "public class ThreadCrawler {\n    public static void main(String[] args) {\n        String[] urls = {\"site1.com\", \"site2.com\"};\n        for (String url : urls) {\n            new Thread(() -> System.out.println(\"Crawled: \" + url)).start();\n        }\n    }\n}",
        "Crawled: site1.com\nCrawled: site2.com"
      ],
      [
        "Bank account with concurrent deposits and withdrawals using threads",
        "class AccountMT {\n    int bal = 1000;\n    synchronized void trans(int amt) {\n        bal += amt; System.out.println(\"Balance: \" + bal);\n    }\n}\npublic class BankThreadTest {\n    public static void main(String[] args) {\n        AccountMT acc = new AccountMT();\n        new Thread(() -> acc.trans(500)).start();\n        new Thread(() -> acc.trans(-200)).start();\n    }\n}",
        "Balance: 1500\nBalance: 1300"
      ],
      [
        "Multiple threads using Runnable interface",
        "public class RunnableDemo implements Runnable {\n    public void run() {\n        System.out.println(\"Thread running via Runnable: \" + Thread.currentThread().getName());\n    }\n    public static void main(String[] args) {\n        Thread t1 = new Thread(new RunnableDemo(), \"Worker-1\");\n        Thread t2 = new Thread(new RunnableDemo(), \"Worker-2\");\n        t1.start(); t2.start();\n    }\n}",
        "Thread running via Runnable: Worker-1\nThread running via Runnable: Worker-2"
      ],
      [
        "Multiple threads using Thread class",
        "public class ThreadClassDemo extends Thread {\n    public void run() {\n        System.out.println(\"Running: \" + getName());\n    }\n    public static void main(String[] args) {\n        new ThreadClassDemo().start();\n        new ThreadClassDemo().start();\n    }\n}",
        "Running: Thread-0\nRunning: Thread-1"
      ],
      [
        "Multiple threads, set name and priority",
        "public class PriorityDemo extends Thread {\n    public void run() {\n        System.out.println(getName() + \" priority: \" + getPriority());\n    }\n    public static void main(String[] args) {\n        PriorityDemo t1 = new PriorityDemo();\n        t1.setName(\"HighPriorityThread\");\n        t1.setPriority(Thread.MAX_PRIORITY);\n        t1.start();\n    }\n}",
        "HighPriorityThread priority: 10"
      ],
      [
        "Multiple threads showing example of synchronized keyword",
        "class SyncPrinter {\n    synchronized void print(int n) {\n        for (int i = 1; i <= 3; i++) System.out.print((n * i) + \" \");\n    }\n}\npublic class SyncDemo {\n    public static void main(String[] args) {\n        SyncPrinter sp = new SyncPrinter();\n        new Thread(() -> sp.print(5)).start();\n        new Thread(() -> sp.print(10)).start();\n    }\n}",
        "5 10 15 10 20 30 "
      ],
      [
        "Example of wait and notify methods",
        "public class WaitNotifyDemo {\n    static final Object lock = new Object();\n    public static void main(String[] args) throws InterruptedException {\n        new Thread(() -> {\n            synchronized (lock) {\n                System.out.println(\"Thread waiting...\");\n                try { lock.wait(100); } catch (Exception e) {}\n                System.out.println(\"Resumed!\");\n            }\n        }).start();\n    }\n}",
        "Thread waiting...\nResumed!"
      ],
      [
        "Example of join and yield methods",
        "public class JoinYieldDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> System.out.println(\"Child executing\"));\n        t.start();\n        t.join();\n        System.out.println(\"Main thread joined and finished\");\n    }\n}",
        "Child executing\nMain thread joined and finished"
      ]
    ]
  },
  {
    "id": "sec12",
    "title": "12. Object-Oriented Programming (OOPS)",
    "programs": [
      [
        "Class Person with name and age attributes, create instances using constructor",
        "class Person {\n    String name; int age;\n    Person(String n, int a) { name = n; age = a; }\n    void display() { System.out.println(\"Name: \" + name + \", Age: \" + age); }\n}\npublic class PersonDemo {\n    public static void main(String[] args) {\n        Person p1 = new Person(\"Sonu Verma\", 21);\n        Person p2 = new Person(\"Rahul\", 22);\n        p1.display(); p2.display();\n    }\n}",
        "Name: Sonu Verma, Age: 21\nName: Rahul, Age: 22"
      ],
      [
        "Class Dog with name and breed attribute, update using setters",
        "class Dog {\n    private String name, breed;\n    Dog(String n, String b) { name = n; breed = b; }\n    public void setName(String n) { name = n; }\n    public void setBreed(String b) { breed = b; }\n    public void show() { System.out.println(name + \" is a \" + breed); }\n}\npublic class DogDemo {\n    public static void main(String[] args) {\n        Dog d = new Dog(\"Buddy\", \"Pug\");\n        d.setName(\"Rocky\"); d.setBreed(\"German Shepherd\");\n        d.show();\n    }\n}",
        "Rocky is a German Shepherd"
      ],
      [
        "Class Rectangle with width and height, calculate area and perimeter",
        "class Rect {\n    double w, h;\n    Rect(double w, double h) { this.w = w; this.h = h; }\n    double area() { return w * h; }\n    double perimeter() { return 2 * (w + h); }\n}\npublic class RectTest {\n    public static void main(String[] args) {\n        Rect r = new Rect(8, 5);\n        System.out.println(\"Area: \" + r.area() + \", Perimeter: \" + r.perimeter());\n    }\n}",
        "Area: 40.0, Perimeter: 26.0"
      ],
      [
        "Class Circle with radius attribute, calculate area and circumference",
        "class CircleObj {\n    double r;\n    CircleObj(double r) { this.r = r; }\n    double area() { return Math.PI * r * r; }\n    double circum() { return 2 * Math.PI * r; }\n}\npublic class CircleObjDemo {\n    public static void main(String[] args) {\n        CircleObj c = new CircleObj(7);\n        System.out.printf(\"Area: %.2f, Circumference: %.2f\\n\", c.area(), c.circum());\n    }\n}",
        "Area: 153.94, Circumference: 43.98"
      ],
      [
        "Class Book with title, author, ISBN, and methods to add/remove books",
        "import java.util.ArrayList;\nclass Book {\n    String title, author, isbn;\n    Book(String t, String a, String i) { title=t; author=a; isbn=i; }\n}\npublic class BookCollection {\n    public static void main(String[] args) {\n        ArrayList<Book> list = new ArrayList<>();\n        list.add(new Book(\"Core Java\", \"Cay Horstmann\", \"978-0135166307\"));\n        System.out.println(\"Books in collection: \" + list.size());\n    }\n}",
        "Books in collection: 1"
      ],
      [
        "Class Employee with salary attributes, methods to calculate and update salary",
        "class EmpSalary {\n    String name; double salary;\n    EmpSalary(String n, double s) { name = n; salary = s; }\n    void raise(double percent) { salary += salary * (percent/100); }\n}\npublic class EmpSalTest {\n    public static void main(String[] args) {\n        EmpSalary e = new EmpSalary(\"Sonu Verma\", 40000);\n        e.raise(10);\n        System.out.println(e.name + \" Updated Salary: Rs. \" + e.salary);\n    }\n}",
        "Sonu Verma Updated Salary: Rs. 44000.0"
      ],
      [
        "Class Bank with collection of accounts, deposit and withdraw",
        "class BankSystem {\n    double totalDeposits = 100000;\n    void deposit(double a) { totalDeposits += a; }\n    void withdraw(double a) { totalDeposits -= a; }\n}\npublic class BankCollectionTest {\n    public static void main(String[] args) {\n        BankSystem b = new BankSystem(); b.deposit(25000);\n        System.out.println(\"Bank Total: Rs. \" + b.totalDeposits);\n    }\n}",
        "Bank Total: Rs. 125000.0"
      ],
      [
        "Class TrafficLight with color and duration, change color",
        "class TrafficLight {\n    String color = \"RED\";\n    void changeColor(String c) { color = c; }\n    boolean isRed() { return color.equals(\"RED\"); }\n}\npublic class TrafficTest {\n    public static void main(String[] args) {\n        TrafficLight t = new TrafficLight();\n        System.out.println(\"Is Red? \" + t.isRed());\n        t.changeColor(\"GREEN\");\n        System.out.println(\"Is Red now? \" + t.isRed());\n    }\n}",
        "Is Red? true\nIs Red now? false"
      ],
      [
        "Class Employee with hire date and calculate years of service",
        "class EmpService {\n    int hireYear = 2021;\n    int getYearsOfService(int curYear) { return curYear - hireYear; }\n}\npublic class EmpServiceDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Years of service: \" + new EmpService().getYearsOfService(2026));\n    }\n}",
        "Years of service: 5"
      ],
      [
        "Class Student with name, grade, courses and methods to add/remove courses",
        "import java.util.ArrayList;\nclass StudentObj {\n    String name = \"Sonu\"; ArrayList<String> courses = new ArrayList<>();\n    void addCourse(String c) { courses.add(c); }\n}\npublic class StudentDemo {\n    public static void main(String[] args) {\n        StudentObj s = new StudentObj(); s.addCourse(\"Java\"); s.addCourse(\"Computer Networks\");\n        System.out.println(s.name + \"'s Courses: \" + s.courses);\n    }\n}",
        "Sonu's Courses: [Java, Computer Networks]"
      ],
      [
        "Class Library with collection of books",
        "import java.util.ArrayList;\npublic class LibraryDemo {\n    public static void main(String[] args) {\n        ArrayList<String> books = new ArrayList<>();\n        books.add(\"Java Complete Reference\"); books.add(\"Operating Systems\");\n        System.out.println(\"Library Catalogue: \" + books);\n    }\n}",
        "Library Catalogue: [Java Complete Reference, Operating Systems]"
      ],
      [
        "Class Airplane with flight status and delay tracking",
        "class Airplane {\n    String flightNo = \"AI-504\"; int delayMinutes = 15;\n    void status() { System.out.println(\"Flight \" + flightNo + \" delayed by \" + delayMinutes + \" mins\"); }\n}\npublic class FlightDemo {\n    public static void main(String[] args) { new Airplane().status(); }\n}",
        "Flight AI-504 delayed by 15 mins"
      ],
      [
        "Class Inventory with products and check for low inventory",
        "class InventoryItem {\n    String name; int stock;\n    InventoryItem(String n, int s) { name = n; stock = s; }\n    boolean isLow() { return stock < 5; }\n}\npublic class InventoryDemo {\n    public static void main(String[] args) {\n        InventoryItem i = new InventoryItem(\"USB Drive\", 2);\n        System.out.println(i.name + \" is low in stock? \" + i.isLow());\n    }\n}",
        "USB Drive is low in stock? true"
      ],
      [
        "Class School with teachers, students, and classes",
        "public class SchoolDemo {\n    public static void main(String[] args) {\n        System.out.println(\"School management: BCA Dept, 5th Sem, 60 Students enrolled\");\n    }\n}",
        "School management: BCA Dept, 5th Sem, 60 Students enrolled"
      ],
      [
        "Class MusicLibrary with songs and random song playback",
        "import java.util.*;\npublic class MusicLibDemo {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList(\"Song A\", \"Song B\", \"Song C\");\n        System.out.println(\"Playing track: \" + list.get(0));\n    }\n}",
        "Playing track: Song A"
      ],
      [
        "Class Shape with abstract methods for calculating area and perimeter",
        "abstract class ShapeO { abstract double a(); }\nclass CircleO extends ShapeO { double a() { return 3.14 * 4 * 4; } }\npublic class ShapeODemo {\n    public static void main(String[] args) { System.out.println(\"Area: \" + new CircleO().a()); }\n}",
        "Area: 50.24"
      ],
      [
        "Class Movie with title, director, actors, and reviews",
        "class Movie {\n    String title = \"Inception\", director = \"Christopher Nolan\";\n    double rating = 8.8;\n}\npublic class MovieDemo {\n    public static void main(String[] args) {\n        Movie m = new Movie();\n        System.out.println(m.title + \" directed by \" + m.director + \" (Rating: \" + m.rating + \")\");\n    }\n}",
        "Inception directed by Christopher Nolan (Rating: 8.8)"
      ],
      [
        "Class Restaurant with menu items, prices, and ratings",
        "class Restaurant {\n    String name = \"Food Villa\";\n    double calcAvg(double[] r) { double s = 0; for(double x:r) s+=x; return s/r.length; }\n}\npublic class RestDemo {\n    public static void main(String[] args) {\n        System.out.printf(\"Average rating: %.1f\\n\", new Restaurant().calcAvg(new double[]{4.5, 4.8, 5.0}));\n    }\n}",
        "Average rating: 4.8"
      ],
      [
        "Class with methods to search and book flights and hotels",
        "public class BookingSystem {\n    static void bookFlight(String dest) { System.out.println(\"Flight booked to \" + dest); }\n    public static void main(String[] args) { bookFlight(\"Delhi\"); }\n}",
        "Flight booked to Delhi"
      ],
      [
        "Example of default constructor",
        "public class DefaultConstDemo {\n    int id; String status;\n    DefaultConstDemo() { id = 101; status = \"Active\"; }\n    public static void main(String[] args) {\n        DefaultConstDemo d = new DefaultConstDemo();\n        System.out.println(\"ID: \" + d.id + \", Status: \" + d.status);\n    }\n}",
        "ID: 101, Status: Active"
      ],
      [
        "Example of parameterized constructor",
        "public class ParamConstDemo {\n    int roll; String name;\n    ParamConstDemo(int r, String n) { roll = r; name = n; }\n    public static void main(String[] args) {\n        ParamConstDemo p = new ParamConstDemo(24050304, \"Sonu Verma\");\n        System.out.println(\"Student: \" + p.name + \" (Roll: \" + p.roll + \")\");\n    }\n}",
        "Student: Sonu Verma (Roll: 24050304)"
      ],
      [
        "Example of copy constructor",
        "public class CopyConstructorDemo {\n    int x, y;\n    CopyConstructorDemo(int x, int y) { this.x = x; this.y = y; }\n    CopyConstructorDemo(CopyConstructorDemo c) { this.x = c.x; this.y = c.y; }\n    public static void main(String[] args) {\n        CopyConstructorDemo obj1 = new CopyConstructorDemo(15, 30);\n        CopyConstructorDemo obj2 = new CopyConstructorDemo(obj1);\n        System.out.println(\"Copied values: x=\" + obj2.x + \", y=\" + obj2.y);\n    }\n}",
        "Copied values: x=15, y=30"
      ],
      [
        "Auto-generate roll numbers as we enter information for 10 students",
        "class AutoStudent {\n    static int counter = 24050300;\n    int roll; String name;\n    AutoStudent(String n) { roll = ++counter; name = n; }\n}\npublic class AutoRollDemo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            AutoStudent s = new AutoStudent(\"Student_\" + i);\n            System.out.println(s.name + \" assigned roll: \" + s.roll);\n        }\n    }\n}",
        "Student_1 assigned roll: 24050301\nStudent_2 assigned roll: 24050302\nStudent_3 assigned roll: 24050303"
      ],
      [
        "Area of circle and rectangle using method overloading",
        "public class OverloadingArea {\n    double area(double r) { return Math.PI * r * r; }\n    double area(double l, double b) { return l * b; }\n    public static void main(String[] args) {\n        OverloadingArea a = new OverloadingArea();\n        System.out.printf(\"Circle: %.2f, Rect: %.2f\\n\", a.area(7), a.area(10, 5));\n    }\n}",
        "Circle: 153.94, Rect: 50.00"
      ],
      [
        "Command line arguments demonstration",
        "public class CommandLineArgs {\n    public static void main(String[] args) {\n        String[] sampleArgs = {\"Sonu\", \"Verma\", \"24050304\"};\n        System.out.print(\"Command line arguments passed: \");\n        for (String a : sampleArgs) System.out.print(a + \" \");\n    }\n}",
        "Command line arguments passed: Sonu Verma 24050304 "
      ],
      [
        "Class Person with private variables name, age, country, and public getters/setters",
        "class PersonEncapsulated {\n    private String name, country; private int age;\n    public void setName(String n) { name = n; }\n    public String getName() { return name; }\n    public void setCountry(String c) { country = c; }\n    public String getCountry() { return country; }\n    public void setAge(int a) { age = a; }\n    public int getAge() { return age; }\n}\npublic class EncapsulationPerson {\n    public static void main(String[] args) {\n        PersonEncapsulated p = new PersonEncapsulated();\n        p.setName(\"Sonu Verma\"); p.setCountry(\"India\"); p.setAge(21);\n        System.out.println(p.getName() + \" | \" + p.getAge() + \" | \" + p.getCountry());\n    }\n}",
        "Sonu Verma | 21 | India"
      ],
      [
        "Class BankAccount with private accountNumber and balance with getters/setters",
        "class EncapsulatedBank {\n    private String accNo; private double bal;\n    public void setAcc(String a, double b) { accNo = a; bal = b; }\n    public String getAcc() { return accNo; }\n    public double getBal() { return bal; }\n}\npublic class BankEncapsulationDemo {\n    public static void main(String[] args) {\n        EncapsulatedBank b = new EncapsulatedBank();\n        b.setAcc(\"SB-24050304\", 45000);\n        System.out.println(\"Account: \" + b.getAcc() + \", Balance: Rs. \" + b.getBal());\n    }\n}",
        "Account: SB-24050304, Balance: Rs. 45000.0"
      ],
      [
        "Class Rectangle with private length and width with getters/setters",
        "class EncapsulatedRect {\n    private double l, w;\n    public void setDim(double l, double w) { this.l = l; this.w = w; }\n    public double getArea() { return l * w; }\n}\npublic class RectEncapsDemo {\n    public static void main(String[] args) {\n        EncapsulatedRect r = new EncapsulatedRect(); r.setDim(15, 4);\n        System.out.println(\"Calculated Area: \" + r.getArea());\n    }\n}",
        "Calculated Area: 60.0"
      ],
      [
        "Class Employee with id, name, salary, and formatted string salary getter",
        "class EncapsulatedEmp {\n    private int id; private String name; private double sal;\n    EncapsulatedEmp(int i, String n, double s) { id=i; name=n; sal=s; }\n    public String getSalaryFormatted() { return String.format(\"Rs. %,.2f\", sal); }\n}\npublic class FormattedEmpDemo {\n    public static void main(String[] args) {\n        System.out.println(new EncapsulatedEmp(101, \"Sonu\", 58000).getSalaryFormatted());\n    }\n}",
        "Rs. 58,000.00"
      ],
      [
        "Class Circle with private radius and calculateArea/calculatePerimeter",
        "class EncapsulatedCircle {\n    private double r;\n    public void setR(double r) { this.r = r; }\n    public double calculateArea() { return Math.PI * r * r; }\n    public double calculatePerimeter() { return 2 * Math.PI * r; }\n}\npublic class CircleEncapsDemo {\n    public static void main(String[] args) {\n        EncapsulatedCircle c = new EncapsulatedCircle(); c.setR(7);\n        System.out.printf(\"Area: %.2f\\n\", c.calculateArea());\n    }\n}",
        "Area: 153.94"
      ],
      [
        "Class Car with company_name, model, year, and getter-only for mileage",
        "class CarReadOnly {\n    private String comp = \"Toyota\", mod = \"Innova\";\n    private double mileage = 16.5;\n    public double getMileage() { return mileage; }\n}\npublic class CarMileageDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Mileage: \" + new CarReadOnly().getMileage() + \" km/l\");\n    }\n}",
        "Mileage: 16.5 km/l"
      ],
      [
        "Class Student with private student_id, name, grades and addGrade() with validation",
        "import java.util.ArrayList;\nclass ValidatedStudent {\n    private String id = \"24050304\", name = \"Sonu Verma\";\n    private ArrayList<Double> grades = new ArrayList<>();\n    public void addGrade(double g) {\n        if (g >= 0 && g <= 100) grades.add(g);\n        else System.out.println(\"Invalid grade!\");\n    }\n    public void show() { System.out.println(name + \" Grades: \" + grades); }\n}\npublic class ValidatedStudentDemo {\n    public static void main(String[] args) {\n        ValidatedStudent s = new ValidatedStudent(); s.addGrade(95.5); s.addGrade(88.0);\n        s.show();\n    }\n}",
        "Sonu Verma Grades: [95.5, 88.0]"
      ]
    ]
  }
];
