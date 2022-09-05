const LOREM_IPSUM = `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
 labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
 aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
 eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt`;

let loremIndex = 0;
function lorem(wordCount = 4): string {
    const lorem = LOREM_IPSUM.split(' ');
    const startIndex = loremIndex + wordCount > lorem.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return lorem.slice(startIndex, loremIndex).join(' ');
}

export const items = Array.from({ length: 200 }).map((item, index) => ({
    key: index,
    test1: `row ${index}`,
    test2: lorem(),
    test3: lorem(),
    test4: lorem(),
    test5: lorem(),
    test6: lorem(),
    test7: lorem(),
    test8: lorem(),
    test9: lorem(),
    test10: lorem()
}));
