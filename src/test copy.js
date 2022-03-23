import TagList from "./test_base"

const tag = [
    'CAT',
    'Chengong',
    'Heli',
    'Hitiac',
    'Komatsu',
    'Livgong',
    'Shantui',
    'Shaanxi',
    'Xyma',
    'XCcling',
    'Амкадор',
    'АТЗ',
    'ВТТЗ',
    'ДОН',
    'ЛТЗ',
    'МТЗ',
    'ПТЗ',
    'Четра',
    'ЦТЗ'
];


const letterArr = tag.map(item => item.charAt(0));

const sortedLetters = letterArr.slice();
sortedLetters.sort()


const alphabetList = [...new Set(sortedLetters)]

// export default alphabetList


